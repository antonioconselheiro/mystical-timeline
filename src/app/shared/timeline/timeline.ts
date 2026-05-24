import { Component, Input, computed } from '@angular/core';
import { TimelineEvent } from '../../domain/timeline-event';
import { TimelineData } from '../../domain/timeline-data';
import { YearCell } from '../../domain/year-cell';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  @Input()
  timeline!: TimelineData;
  
  @Input()
  yearsPerCell?: number;

  get showYearsPerCellLegend(): boolean {
    return this.yearsPerCell !== undefined && this.yearsPerCell !== null;
  }

  get yearsPerCellLabel(): string {
    const step = this.getCellStep();

    if (step === 1) {
      return '1 ano';
    }

    return `${step} anos`;
  }

  private buildCellTitle(year: number, eventNames: string[]): string {
    if (eventNames.length === 0) {
      return `${year}`;
    }

    return `${year}: ${eventNames.join('; ')}`;
  }
  
  private getCellStep(): number {
    const parsedStep = Number(this.yearsPerCell);
    
    if (!Number.isFinite(parsedStep) || parsedStep < 1) {
      return 1;
    }
    
    return Math.floor(parsedStep);
  }

  private resolveEvents() {
    const yearMap = new Map<string, number>();

    if (!this.timeline.events || this.timeline.events.length === 0) {
      return [] as Array<{ year: number; name: string }>;
    }

    // Primeira passagem: processar eventos com year direto
    for (const event of this.timeline.events) {
      if (event.year !== undefined) {
        yearMap.set(event.uuid, event.year);
      }
    }

    // Segunda passagem: resolver referências addYears
    let changed = true;
    while (changed) {
      changed = false;
      for (const event of this.timeline.events) {
        if (!yearMap.has(event.uuid) && event.addYears) {
          const [refUuid, addYears] = event.addYears;
          if (yearMap.has(refUuid)) {
            const calculatedYear = yearMap.get(refUuid)! + addYears;
            yearMap.set(event.uuid, calculatedYear);
            changed = true;
          }
        }
      }
    }

    return this.timeline.events
      .map((event) => ({
        year: yearMap.get(event.uuid),
        name: event.name,
      }))
      .filter((event): event is { year: number; name: string } => event.year !== undefined);
  }

  yearsWithEvents = computed(() => {
    const resolvedEvents = this.resolveEvents();
    const cellStep = this.getCellStep();
    
    if (resolvedEvents.length === 0) {
      return [];
    }

    const eventYears = resolvedEvents.map((event) => event.year);
    const minYear = Math.min(...eventYears);
    const maxYear = Math.max(...eventYears);
    const cellToEventNames = new Map<number, string[]>();

    for (const event of resolvedEvents) {
      const bucketIndex = Math.floor((event.year - minYear) / cellStep);
      const cellYear = minYear + bucketIndex * cellStep;
      const eventNames = cellToEventNames.get(cellYear) ?? [];
      eventNames.push(event.name);
      cellToEventNames.set(cellYear, eventNames);
    }

    const cells: YearCell[] = [];
    for (let year = minYear; year <= maxYear; year += cellStep) {
      const eventNames = cellToEventNames.get(year) ?? [];
      cells.push({
        year,
        hasEvent: eventNames.length > 0,
        eventName: eventNames.join('; '),
        title: this.buildCellTitle(year, eventNames)
      });
    }

    return cells;
  });
}
