import { Component } from '@angular/core';
import { TimelineData } from '../../domain/timeline-data';
import { Timeline } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-timelines-page',
  imports: [Timeline],
  templateUrl: './timelines-page.html',
  styleUrl: './timelines-page.scss',
})
export class TimelinesPage {
  jubileus: TimelineData = {
    name: 'Jubileu',
    events: []
  };

  pentateuco: TimelineData = {
    name: 'Pentateuco',
    events: [
      {
        uuid: '550e8400-e29b-41d4-a716-446655440000',
        name: 'Nascimento de Adão',
        year: 0,
        source: [
          ['GEN', 1, 1]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440001',
        name: 'Nascimento de Sete, filho de Adão e Eva',
        addYears: [ '550e8400-e29b-41d4-a716-446655440000', 130 ],
        source: [
          ['GEN', 5, 3]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440002',
        name: 'Morte de Adão',
        addYears: [ '550e8400-e29b-41d4-a716-446655440000', 930 ],
        source: [
          ['GEN', 5, 5]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440003',
        name: 'Nascimento de Enos, filho de Sete',
        addYears: [ '550e8400-e29b-41d4-a716-446655440001', 105 ],
        source: [
          ['GEN', 5, 6]
        ]
      }
    ]
  };
}
