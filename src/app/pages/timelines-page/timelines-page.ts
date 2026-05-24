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


  readonly jubileuTempos = {
    JUBILEU: 49,
    SEMANA: 7,
    PRIMEIRA_SEMANA: 0 * 7,
    SEGUNDA_SEMANA: 1 * 7,
    TERCEIRA_SEMANA: 2 * 7,
    QUARTA_SEMANA: 3 * 7,
    QUINTA_SEMANA: 4 * 7,
    SEXTA_SEMANA: 5 * 7,
    SETIMA_SEMANA: 6 * 7
  };

  jubileus: TimelineData = {
    name: 'Jubileu',
    events: [
      {
        uuid: '440e8400-e29b-41d4-a716-553311550000',
        name: 'Nascimento de Adão',
        year: 0,
        source: [
          ['JUB', 1, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550001',
        name: 'E na primeira semana do primeiro jubileu, Adão e sua esposa lavravam no jardim do Éden',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', 7],
        source: [
          ['JUB', 3, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550002',
        name: 'Adão chamou o nome da sua esposa Eva. E não tinham filho até o primeiro jubileu',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU],
        source: [
          ['JUB', 3, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550003',
        name: 'Na terceira semana do jubileu segundo, ela deu à luz a Caim',
        addYears: ['440e8400-e29b-41d4-a716-553311550002', this.jubileuTempos.SEMANA],
        source: [
          ['JUB', 4, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550004',
        name: 'Na quarta semana do jubileu Eva deu à luz a Abel',
        addYears: ['440e8400-e29b-41d4-a716-553311550003', 7],
        source: [
          ['JUB', 4, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550005',
        name: 'Na quinta semana do jubileu Eva deu à luz a Awan',
        addYears: ['440e8400-e29b-41d4-a716-553311550004', 7],
        source: [
          ['JUB', 4, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550006',
        name: 'Primeiro ano do jubileu terceiros, Caim matou Abel',
        addYears: ['440e8400-e29b-41d4-a716-553311550002', this.jubileuTempos.JUBILEU + 1],
        source: [
          ['JUB', 4, 2]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550007',
        name: 'E Adão e sua esposa lamentou Abel quatro semanas de anos',
        addYears: ['440e8400-e29b-41d4-a716-553311550006', 7 * 4],
        source: [
          ['JUB', 4, 7]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550008',
        name: 'no quarto ano da quinta semana, eles se tornaram alegres',
        addYears: ['440e8400-e29b-41d4-a716-553311550006', 7 * 5 + 4],
        source: [
          ['JUB', 4, 7]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550008',
        name: 'Eva na sexta semana gerou Azura',
        addYears: ['440e8400-e29b-41d4-a716-553311550006', 7 * 6],
        source: [
          ['JUB', 4, 9]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550009',
        name: 'E Caim tomou Awan sua irmã para ser sua esposa e ela lhe deu Enoque no encerramento do jubileu quarto.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 4 + 1],
        source: [
          ['JUB', 4, 9]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000a',
        name: 'No primeiro ano da primeira semana do quinto Jubileu Caim construiu a cidade de Enoque',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 4 + 1],
        source: [
          ['JUB', 4, 9]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000b',
        name: 'E na quinta semana do jubileu quinto, Sete tomou Azura sua irmã para ser sua esposa.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 5 + 5 * 7],
        source: [
          ['JUB', 4, 11]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000c',
        name: 'Nascimento de Enos',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 5 + 6 * 7],
        source: [
          ['JUB', 4, 13]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000d',
        name: 'No sétimo jubileu na terceira semana Enos tomou Noam sua irmã para ser sua esposa',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 7 + 3 * 7],
        source: [
          ['JUB', 4, 13]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000e',
        name: 'No terceiro ano da quinta semana, nasceu Caina Mualeleth, filho de Enos',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 7 + 5 * 7 + 3],
        source: [
          ['JUB', 4, 14]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000f',
        name: 'No encerramento da oitava jubileu Kenan Mualeleth levou sua irmã para ser sua esposa',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 8 + 6],
        source: [
          ['JUB', 4, 14]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550010',
        name: 'No ano do jubileu nono, na primeira semana, no terceiro ano, nasceu Maalalel, filho de Kenan',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 9 + 3],
        source: [
          ['JUB', 4, 14]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550011',
        name: 'Na segunda semana do décimo jubileu Maalalel tomou-lhe a esposa Dinah, a filha de Barakiel a filha do irmão de seu pai',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 10 + 7],
        source: [
          ['JUB', 4, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550012',
        name: 'Na terceira semana do sexto ano, nasceu Jarede filhos de Maalalel',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 10 + 7 * 3 + 6],
        source: [
          ['JUB', 4, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550013',
        name: 'E no ano do jubileu décima primeira Jared tomou para si uma esposa, e seu nome era Baraka, a filha de Rasujal, a filha do irmão de seu pai',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 11],
        source: [
          ['JUB', 4, 16]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550014',
        name: 'Na quinta semana, no quarto ano do jubileu, nasceu Enoque filho de Jarede',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 11 + 7 * 4 + 4],
        source: [
          ['JUB', 4, 16]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550015',
        name: 'E no ano do jubileu XII, na sétima semana mesmo, ele tomou para si uma esposa, e seu nome era Edna, filha de Danel, a filha do irmão de seu pai',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 12 + 7 * 6],
        source: [
          ['JUB', 4, 20]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550016',
        name: 'Sexto ano nesta semana, nasceu Matusalém filho de Enoque.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 12 + 7 * 6 + 6],
        source: [
          ['JUB', 4, 20]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550017',
        name: 'No décimo quarto jubileu Matusalém tomou para si uma esposa, Edna, filha de Azrial, a filha do irmão de seu pai.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 14],
        source: [
          ['JUB', 4, 27]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550018',
        name: 'Na terceira semana do décimo quarto jubileu, nasceu Lameque filho de Matusalém.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 14 + 2 * 7],
        source: [
          ['JUB', 4, 27]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550019',
        name: 'No ano do jubileu décimo quinto na terceira semana Lameque tomou para si uma esposa, e seu nome era Betenos, filha de Baraki\'il, a filha do irmão de seu pai.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileuTempos.JUBILEU * 15 + 3 * 7],
        source: [
          ['JUB', 4, 28]
        ]
      },


    ]
  };


//   27 as gerações do mundo.E, , .E, e esta semana ela deu à luz um filho e chamou o seu nome
// Noé, dizendo: 'Este será um conforto para mim para os meus problemas e todo o meu trabalho, e
// para o chão
// 729, que o Senhor amaldiçoou.E no encerramento do jubileu XIX, na sétima semana em seu sexto
// ano, Adam morreu, e todos os seus filhos, sepultaram - no na terra de sua criação, e ele
// 30 foi o primeiro a ser enterrado na terra.E ele não tinha setenta anos de mil anos, por mil anos são
// como um dia no testemunho dos céus e, portanto, foi escrito acerca da árvore do conhecimento: "No
// dia em que comerdes desse haveis de morrer." Por esta razão ele
// 31 não completaram os anos neste dia, pois ele morreu durante a mesma.No final deste jubileu
// Caim foi morto depois dele, no mesmo ano, para a sua casa caiu em cima dele e ele morreu no meio
// da casa dele, e ele foi morto por suas pedras, pois com uma pedra, ele matou Abel, e por uma pedra
// que ele foi morto em
// 32 julgamento justo.Por este motivo, foi ordenado nas tábuas celestes: Com o instrumento com o
// qual um homem mata o seu vizinho com o mesmo ele deve ser morto, depois da forma que
// 33 Ele feriu, na forma como eles devem lidar com ele. " E no ano do jubileu vigésimo quinto Noé
// tomou para si uma esposa, e seu nome era Emzara, filha de Rake'el, a filha do irmão de seu pai, no
// primeiro ano na quinta semana e, no seu terceiro ano ela deu à luz Sem ele, no seu quinto ano ela
// deu - lhe Ham, e no primeiro ano na sexta semana ela deu - lhe Jafé.

  genesis: TimelineData = {
    name: 'Gênesis',
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
        addYears: ['550e8400-e29b-41d4-a716-446655440000', 130],
        source: [
          ['GEN', 5, 3]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440002',
        name: 'Morte de Adão',
        addYears: ['550e8400-e29b-41d4-a716-446655440000', 930],
        source: [
          ['GEN', 5, 5]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440003',
        name: 'Nascimento de Enos, filho de Sete',
        addYears: ['550e8400-e29b-41d4-a716-446655440001', 105],
        source: [
          ['GEN', 5, 6]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440004',
        name: 'Morte de Sete',
        addYears: ['550e8400-e29b-41d4-a716-446655440001', 912],
        source: [
          ['GEN', 5, 8]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440005',
        name: 'Nascimento de Caina, filho de Enos',
        addYears: ['550e8400-e29b-41d4-a716-446655440003', 90],
        source: [
          ['GEN', 5, 9]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440006',
        name: 'Morte de Enos',
        addYears: ['550e8400-e29b-41d4-a716-446655440003', 905],
        source: [
          ['GEN', 5, 11]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440007',
        name: 'Nascimento de Maalalel, filho de Caina',
        addYears: ['550e8400-e29b-41d4-a716-446655440005', 70],
        source: [
          ['GEN', 5, 12]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440008',
        name: 'Morte de Caina',
        addYears: ['550e8400-e29b-41d4-a716-446655440005', 910],
        source: [
          ['GEN', 5, 14]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440009',
        name: 'Nascimento de Jerede, filho de Maalalel',
        addYears: ['550e8400-e29b-41d4-a716-446655440007', 65],
        source: [
          ['GEN', 5, 15]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000a',
        name: 'Morte de Maalalel',
        addYears: ['550e8400-e29b-41d4-a716-446655440007', 895],
        source: [
          ['GEN', 5, 17]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000b',
        name: 'Nascimento de Enoque, filho de Jerede',
        addYears: ['550e8400-e29b-41d4-a716-446655440009', 162],
        source: [
          ['GEN', 5, 18]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000c',
        name: 'Morte de Jerede',
        addYears: ['550e8400-e29b-41d4-a716-446655440009', 962],
        source: [
          ['GEN', 5, 20]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000d',
        name: 'Nascimento de Matusalem, filho de Enoque',
        addYears: ['550e8400-e29b-41d4-a716-44665544000b', 65],
        source: [
          ['GEN', 5, 21]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000e',
        name: 'Enoque foi tomado por Deus',
        addYears: ['550e8400-e29b-41d4-a716-44665544000b', 365],
        source: [
          ['GEN', 5, 24]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544000f',
        name: 'Nascimento de Lameque, filho de Matusalem',
        addYears: ['550e8400-e29b-41d4-a716-44665544000d', 187],
        source: [
          ['GEN', 5, 25]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440010',
        name: 'Morte de Matusalem',
        addYears: ['550e8400-e29b-41d4-a716-44665544000d', 969],
        source: [
          ['GEN', 5, 27]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440011',
        name: 'Nascimento de Noé, filho de Lameque',
        addYears: ['550e8400-e29b-41d4-a716-44665544000f', 182],
        source: [
          ['GEN', 5, 29]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440012',
        name: 'Morte de Lameque',
        addYears: ['550e8400-e29b-41d4-a716-44665544000f', 777],
        source: [
          ['GEN', 5, 31]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440013',
        name: 'Noé já havia gerado Sem, Cam e Jafé',
        addYears: ['550e8400-e29b-41d4-a716-446655440011', 500],
        source: [
          ['GEN', 5, 32]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446645440100',
        name: 'Noé era da idade de seiscentos anos, quando o dilúvio das águas vieram sobre a terra',
        addYears: ['550e8400-e29b-41d4-a716-446655440011', 600],
        source: [
          ['GEN', 7, 6],
          ['GEN', 7, 11]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440014',
        name: 'Nascimento de Arfaxade, filho de Sem com 100 anos de idade, dois anos após o dilúvio',
        addYears: ['550e8400-e29b-41d4-a716-446645440100', 2],
        source: [
          ['GEN', 11, 10]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440015',
        name: 'Morte de Sem',
        addYears: ['550e8400-e29b-41d4-a716-446655440014', 500],
        source: [
          ['GEN', 11, 11]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440016',
        name: 'Nascimento de Sela, filho de Arfaxade',
        addYears: ['550e8400-e29b-41d4-a716-446655440014', 35],
        source: [
          ['GEN', 11, 12]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440017',
        name: 'Morte de Arfaxade',
        addYears: ['550e8400-e29b-41d4-a716-446655440016', 403],
        source: [
          ['GEN', 11, 13]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440018',
        name: 'Nascimento de Eber, filho de Sela',
        addYears: ['550e8400-e29b-41d4-a716-446655440016', 30],
        source: [
          ['GEN', 11, 14]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440019',
        name: 'Morte de Sela',
        addYears: ['550e8400-e29b-41d4-a716-446655440018', 403],
        source: [
          ['GEN', 11, 15]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001a',
        name: 'Nascimento de Pelegue, filho de Eber',
        addYears: ['550e8400-e29b-41d4-a716-446655440018', 34],
        source: [
          ['GEN', 11, 16]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001b',
        name: 'Morte de Eber',
        addYears: ['550e8400-e29b-41d4-a716-44665544001a', 430],
        source: [
          ['GEN', 11, 17]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001c',
        name: 'Nascimento de Reu, filho de Pelegue',
        addYears: ['550e8400-e29b-41d4-a716-44665544001a', 30],
        source: [
          ['GEN', 11, 18]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001d',
        name: 'Morte de Pelegue',
        addYears: ['550e8400-e29b-41d4-a716-44665544001c', 209],
        source: [
          ['GEN', 11, 19]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001e',
        name: 'Nascimento de Serugue, filho de Reu',
        addYears: ['550e8400-e29b-41d4-a716-44665544001c', 32],
        source: [
          ['GEN', 11, 20]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544001f',
        name: 'Morte de Reu',
        addYears: ['550e8400-e29b-41d4-a716-44665544001e', 207],
        source: [
          ['GEN', 11, 21]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440020',
        name: 'Nascimento de Naor, filho de Serugue',
        addYears: ['550e8400-e29b-41d4-a716-44665544001e', 30],
        source: [
          ['GEN', 11, 22]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440021',
        name: 'Morte de Serugue',
        addYears: ['550e8400-e29b-41d4-a716-446655440020', 200],
        source: [
          ['GEN', 11, 23]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440022',
        name: 'Nascimento de Tera, filho de Naor',
        addYears: ['550e8400-e29b-41d4-a716-446655440020', 29],
        source: [
          ['GEN', 11, 24]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440023',
        name: 'Morte de Naor',
        addYears: ['550e8400-e29b-41d4-a716-446655440022', 119],
        source: [
          ['GEN', 11, 25]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440024',
        name: 'Tera gerou Abrão, Naor e Hara', // nascimento de abraão é impreciso
        addYears: ['550e8400-e29b-41d4-a716-446655440022', 70],
        source: [
          ['GEN', 11, 26],
          ['GEN', 11, 27]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440027',
        name: 'Abrao saiu de Hara aos setenta e cinco anos, e Ló foi com ele',
        addYears: ['550e8400-e29b-41d4-a716-446655440024', 75],
        source: [
          ['GEN', 12, 4]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440028',
        name: 'Agar deu a luz Ismael quando Abrão tinha oitenta e seis anos',
        addYears: ['550e8400-e29b-41d4-a716-446655440022', 86],
        source: [
          ['GEN', 16, 16]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-446655440029',
        name: 'O Senhor apareceu a Abrão quando ele tinha noventa e nove anos',
        addYears: ['550e8400-e29b-41d4-a716-446655440022', 99],
        source: [
          ['GEN', 17, 1]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544002a',
        name: 'Nascimento de Isaque, filho de Abraão, quando ele tinha cem anos',
        addYears: ['550e8400-e29b-41d4-a716-446655440022', 100],
        source: [
          ['GEN', 21, 5]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544002b',
        name: 'Morte de Abraão aos cento e setenta e cinco anos',
        addYears: ['550e8400-e29b-41d4-a716-446655440022', 175],
        source: [
          ['GEN', 25, 7]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544002e',
        name: 'Morte de Ismael aos cento e trinta e sete anos',
        addYears: ['550e8400-e29b-41d4-a716-446655440028', 137],
        source: [
          ['GEN', 25, 17]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544002c',
        name: 'Nascimento de Jaco e Esau quando Isaque tinha sessenta anos',
        addYears: ['550e8400-e29b-41d4-a716-44665544002a', 60],
        source: [
          ['GEN', 25, 26]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544002d',
        name: 'Morte de Isaque aos cento e oitenta anos',
        addYears: ['550e8400-e29b-41d4-a716-44665544002a', 120],
        source: [
          ['GEN', 35, 28]
        ]
      },

      {
        uuid: '550e8400-e29b-41d4-a716-44665544002f',
        name: 'Morte de Jaco aos cento e quarenta e sete anos',
        addYears: ['550e8400-e29b-41d4-a716-44665544002c', 147],
        source: [
          ['GEN', 47, 28]
        ]
      }
    ]
  };
}
