import { Component, Input, computed } from '@angular/core';

export interface TimelineEvent {
  uuid: string;
  name: string;
  year?: number;
  addYears?: [string, number];
  source?: Array<[ string, number, number]>;
}

export interface TimelineData {
  name: string;
  events: TimelineEvent[];
}

export interface YearCell {
  year: number;
  hasEvent: boolean;
  eventName?: string;
}

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  @Input()
  timeline!: TimelineData;

  private calculateEventYears() {
    const yearMap = new Map<string, number>();
    const yearToEvent = new Map<number, string>();
    const processedYears: number[] = [];

    if (!this.timeline.events || this.timeline.events.length === 0) {
      return { years: [], yearToEvent };
    }

    // Primeira passagem: processar eventos com year direto
    for (const event of this.timeline.events) {
      if (event.year !== undefined) {
        yearMap.set(event.uuid, event.year);
        yearToEvent.set(event.year, event.name);
        processedYears.push(event.year);
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
            yearToEvent.set(calculatedYear, event.name);
            processedYears.push(calculatedYear);
            changed = true;
          }
        }
      }
    }

    return { years: processedYears, yearToEvent };
  }

  yearsWithEvents = computed(() => {
    const { years: eventYears, yearToEvent } = this.calculateEventYears();
    
    if (eventYears.length === 0) {
      return [];
    }

    const minYear = Math.min(...eventYears);
    const maxYear = Math.max(...eventYears);
    const yearSet = new Set(eventYears);

    const cells: YearCell[] = [];
    for (let year = minYear; year <= maxYear; year++) {
      cells.push({
        year,
        hasEvent: yearSet.has(year),
        eventName: yearToEvent.get(year)
      });
    }
debugger;
    return cells;
  });
}
