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
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440004',
        name: 'Morte de Sete',
        addYears: [ '550e8400-e29b-41d4-a716-446655440001', 912 ],
        source: [
          ['GEN', 5, 8]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440005',
        name: 'Nascimento de Caina, filho de Enos',
        addYears: [ '550e8400-e29b-41d4-a716-446655440003', 90 ],
        source: [
          ['GEN', 5, 9]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440006',
        name: 'Morte de Enos',
        addYears: [ '550e8400-e29b-41d4-a716-446655440003', 905 ],
        source: [
          ['GEN', 5, 11]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440007',
        name: 'Nascimento de Maalalel, filho de Caina',
        addYears: [ '550e8400-e29b-41d4-a716-446655440005', 70 ],
        source: [
          ['GEN', 5, 12]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440008',
        name: 'Morte de Caina',
        addYears: [ '550e8400-e29b-41d4-a716-446655440005', 910 ],
        source: [
          ['GEN', 5, 14]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440009',
        name: 'Nascimento de Jerede, filho de Maalalel',
        addYears: [ '550e8400-e29b-41d4-a716-446655440007', 65 ],
        source: [
          ['GEN', 5, 15]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000a',
        name: 'Morte de Maalalel',
        addYears: [ '550e8400-e29b-41d4-a716-446655440007', 895 ],
        source: [
          ['GEN', 5, 17]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000b',
        name: 'Nascimento de Enoque, filho de Jerede',
        addYears: [ '550e8400-e29b-41d4-a716-446655440009', 162 ],
        source: [
          ['GEN', 5, 18]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000c',
        name: 'Morte de Jerede',
        addYears: [ '550e8400-e29b-41d4-a716-446655440009', 962 ],
        source: [
          ['GEN', 5, 20]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000d',
        name: 'Nascimento de Matusalem, filho de Enoque',
        addYears: [ '550e8400-e29b-41d4-a716-44665544000b', 65 ],
        source: [
          ['GEN', 5, 21]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000e',
        name: 'Enoque foi tomado por Deus',
        addYears: [ '550e8400-e29b-41d4-a716-44665544000b', 365 ],
        source: [
          ['GEN', 5, 24]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000f',
        name: 'Nascimento de Lameque, filho de Matusalem',
        addYears: [ '550e8400-e29b-41d4-a716-44665544000d', 187 ],
        source: [
          ['GEN', 5, 25]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440010',
        name: 'Morte de Matusalem',
        addYears: [ '550e8400-e29b-41d4-a716-44665544000d', 969 ],
        source: [
          ['GEN', 5, 27]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440011',
        name: 'Nascimento de Noe, filho de Lameque',
        addYears: [ '550e8400-e29b-41d4-a716-44665544000f', 182 ],
        source: [
          ['GEN', 5, 29]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440012',
        name: 'Morte de Lameque',
        addYears: [ '550e8400-e29b-41d4-a716-44665544000f', 777 ],
        source: [
          ['GEN', 5, 31]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440013',
        name: 'Noé já havia gerado Sem, Cao e Jafe',
        addYears: [ '550e8400-e29b-41d4-a716-446655440011', 500 ],
        source: [
          ['GEN', 5, 32]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446645440100',
        name: 'Noé era da idade de seiscentos anos, quando o dilúvio das águas vieram sobre a terra',
        addYears: [ '550e8400-e29b-41d4-a716-446655440013', 600 ],
        source: [
          ['GEN', 7, 6],
          ['GEN', 7, 11]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440014',
        name: 'Nascimento de Arfaxade, filho de Sem com 100 anos de idade, dois anos após o dilúvio',
        addYears: [ '550e8400-e29b-41d4-a716-446645440100', 2 ],
        source: [
          ['GEN', 11, 10]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440015',
        name: 'Morte de Sem',
        addYears: [ '550e8400-e29b-41d4-a716-446655440014', 500 ],
        source: [
          ['GEN', 11, 11]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440016',
        name: 'Nascimento de Sela, filho de Arfaxade',
        addYears: [ '550e8400-e29b-41d4-a716-446655440014', 35 ],
        source: [
          ['GEN', 11, 12]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440017',
        name: 'Morte de Arfaxade',
        addYears: [ '550e8400-e29b-41d4-a716-446655440016', 403 ],
        source: [
          ['GEN', 11, 13]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440018',
        name: 'Nascimento de Eber, filho de Sela',
        addYears: [ '550e8400-e29b-41d4-a716-446655440016', 30 ],
        source: [
          ['GEN', 11, 14]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440019',
        name: 'Morte de Sela',
        addYears: [ '550e8400-e29b-41d4-a716-446655440018', 403 ],
        source: [
          ['GEN', 11, 15]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001a',
        name: 'Nascimento de Pelegue, filho de Eber',
        addYears: [ '550e8400-e29b-41d4-a716-446655440018', 34 ],
        source: [
          ['GEN', 11, 16]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001b',
        name: 'Morte de Eber',
        addYears: [ '550e8400-e29b-41d4-a716-44665544001a', 430 ],
        source: [
          ['GEN', 11, 17]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001c',
        name: 'Nascimento de Reu, filho de Pelegue',
        addYears: [ '550e8400-e29b-41d4-a716-44665544001a', 30 ],
        source: [
          ['GEN', 11, 18]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001d',
        name: 'Morte de Pelegue',
        addYears: [ '550e8400-e29b-41d4-a716-44665544001c', 209 ],
        source: [
          ['GEN', 11, 19]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001e',
        name: 'Nascimento de Serugue, filho de Reu',
        addYears: [ '550e8400-e29b-41d4-a716-44665544001c', 32 ],
        source: [
          ['GEN', 11, 20]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001f',
        name: 'Morte de Reu',
        addYears: [ '550e8400-e29b-41d4-a716-44665544001e', 207 ],
        source: [
          ['GEN', 11, 21]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440020',
        name: 'Nascimento de Naor, filho de Serugue',
        addYears: [ '550e8400-e29b-41d4-a716-44665544001e', 30 ],
        source: [
          ['GEN', 11, 22]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440021',
        name: 'Morte de Serugue',
        addYears: [ '550e8400-e29b-41d4-a716-446655440020', 200 ],
        source: [
          ['GEN', 11, 23]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440022',
        name: 'Nascimento de Tera, filho de Naor',
        addYears: [ '550e8400-e29b-41d4-a716-446655440020', 29 ],
        source: [
          ['GEN', 11, 24]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440023',
        name: 'Morte de Naor',
        addYears: [ '550e8400-e29b-41d4-a716-446655440022', 119 ],
        source: [
          ['GEN', 11, 25]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440024',
        name: 'Tera gerou Abrao, Naor e Hara',
        addYears: [ '550e8400-e29b-41d4-a716-446655440022', 70 ],
        source: [
          ['GEN', 11, 26],
          ['GEN', 11, 27]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440025',
        name: 'Hara gerou Lo',
        addYears: [ '550e8400-e29b-41d4-a716-446655440024', 0 ],
        source: [
          ['GEN', 11, 27]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440026',
        name: 'Morte de Hara em Ur dos caldeus',
        addYears: [ '550e8400-e29b-41d4-a716-446655440024', 0 ],
        source: [
          ['GEN', 11, 28]
        ]
      }
    ]
  };
}
