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
    SEMANA: 7
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
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(1, 1, 1)],
        source: [
          ['JUB', 3, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550002',
        name: 'Adão chamou o nome da sua esposa Eva. E não tinham filho até o primeiro jubileu',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(2, 1, 1) - 1],
        source: [
          ['JUB', 3, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550003',
        name: 'Na terceira semana do jubileu segundo, ela deu à luz a Caim',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(2, 3, 1)],
        source: [
          ['JUB', 4, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550004',
        name: 'Na quarta semana do jubileu Eva deu à luz a Abel',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(2, 4, 1)],
        source: [
          ['JUB', 4, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550005',
        name: 'Na quinta semana do jubileu Eva deu à luz a Awan',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(2, 5, 1)],
        source: [
          ['JUB', 4, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550006',
        name: 'Primeiro ano do jubileu terceiros, Caim matou Abel',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(3, 1, 1)],
        source: [
          ['JUB', 4, 2]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550007',
        name: 'E Adão e sua esposa lamentou Abel quatro semanas de anos',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(3, 4, 1)],
        source: [
          ['JUB', 4, 7]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550008',
        name: 'No quarto ano da quinta semana, eles se tornaram alegres. E depois geraram Sete.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(3, 5, 4)],
        source: [
          ['JUB', 4, 7]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550008',
        name: 'Eva na sexta semana gerou Azura',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(3, 6, 1)],
        source: [
          ['JUB', 4, 9]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550009',
        name: 'E Caim tomou Awan sua irmã para ser sua esposa e ela lhe deu Enoque no encerramento do jubileu quarto.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(5, 1, 1) - 1],
        source: [
          ['JUB', 4, 9]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000a',
        name: 'No primeiro ano da primeira semana do quinto Jubileu Caim construiu a cidade de Enoque',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(5, 1, 1)],
        source: [
          ['JUB', 4, 9]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000b',
        name: 'E na quinta semana do jubileu quinto, Sete tomou Azura sua irmã para ser sua esposa.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(5, 5, 1)],
        source: [
          ['JUB', 4, 11]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000c',
        name: 'Nascimento de Enos',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(5, 6, 1)],
        source: [
          ['JUB', 4, 13]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000d',
        name: 'No sétimo jubileu na terceira semana Enos tomou Noam sua irmã para ser sua esposa',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(7, 3, 1)],
        source: [
          ['JUB', 4, 13]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000e',
        name: 'No terceiro ano da quinta semana, nasceu Caina Mualeleth, filho de Enos',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(7, 5, 3)],
        source: [
          ['JUB', 4, 14]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-55331155000f',
        name: 'No encerramento da oitava jubileu Caina Mualeleth levou sua irmã para ser sua esposa',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(9, 1, 1) - 1],
        source: [
          ['JUB', 4, 14]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550010',
        name: 'No ano do jubileu nono, na primeira semana, no terceiro ano, nasceu Maalalel, filho de Caina',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(9, 1, 3)],
        source: [
          ['JUB', 4, 14]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550011',
        name: 'Na segunda semana do décimo jubileu Maalalel tomou-lhe a esposa Dinah, a filha de Barakiel a filha do irmão de seu pai',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(10, 2, 1)],
        source: [
          ['JUB', 4, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550012',
        name: 'Na terceira semana do sexto ano, nasceu Jarede filhos de Maalalel',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(10, 3, 6)],
        source: [
          ['JUB', 4, 15]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550013',
        name: 'E no ano do jubileu décima primeira Jarede tomou para si uma esposa, e seu nome era Baraka, a filha de Rasujal, a filha do irmão de seu pai',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(11, 1, 1)],
        source: [
          ['JUB', 4, 16]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550014',
        name: 'Na quinta semana, no quarto ano do jubileu, nasceu Enoque filho de Jarede',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(11, 5, 4)],
        source: [
          ['JUB', 4, 16]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550015',
        name: 'E no ano do jubileu XII, na sétima semana mesmo, ele tomou para si uma esposa, e seu nome era Edna, filha de Danel, a filha do irmão de seu pai',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(12, 7, 1)],
        source: [
          ['JUB', 4, 20]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550016',
        name: 'Sexto ano nesta semana, nasceu Matusalém filho de Enoque.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(12, 7, 6)],
        source: [
          ['JUB', 4, 20]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550017',
        name: 'No décimo quarto jubileu Matusalém tomou para si uma esposa, Edna, filha de Azrial, a filha do irmão de seu pai.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(14, 1, 1)],
        source: [
          ['JUB', 4, 27]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550018',
        name: 'Na terceira semana do décimo quarto jubileu, nasceu Lameque filho de Matusalém.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(14, 3, 1)],
        source: [
          ['JUB', 4, 27]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550019',
        name: 'No ano do jubileu décimo quinto na terceira semana Lameque tomou para si uma esposa, e seu nome era Betenos, filha de Baraki\'il, a filha do irmão de seu pai, e nesta semana ela deu à luz um filho e chamou o seu nome Noé',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(15, 3, 1)],
        source: [
          ['JUB', 4, 28]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550020',
        name: 'No encerramento do jubileu XIX, na sétima semana em seu sexto ano, Adam morreu',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(19, 7, 6)],
        source: [
          ['JUB', 4, 29]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550021',
        name: 'E no ano do jubileu vigésimo quinto Noé tomou para si uma esposa, e seu nome era Emzara, filha de Rake\'el, a filha do irmão de seu pai, no primeiro ano na quinta semana',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(25, 5, 1)],
        source: [
          ['JUB', 4, 33]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550022',
        name: 'no seu terceiro ano Emzara deu à luz Sem',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(25, 5, 3)],
        source: [
          ['JUB', 4, 33]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550023',
        name: 'No seu quinto ano Emzara deu - lhe Ham',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(25, 5, 5)],
        source: [
          ['JUB', 4, 33]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550024',
        name: 'No primeiro ano na sexta semana ela deu - lhe Jafé.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(25, 6, 1)],
        source: [
          ['JUB', 4, 33]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550025',
        name: 'E Noé fez a arca em todos os aspectos, como Ele ordenou, no vigésimo sétimo jubileu do ano, na quinta semana, no quinto ano (na lua nova do primeiro mês).',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(27, 5, 5)],
        source: [
          ['JUB', 5, 22]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550026',
        name: 'E ele entrou na sexta (ano) da mesma, no segundo mês, na lua nova do segundo mês, até o décimo sexto, e ele entrou e tudo o que lhe trouxe, na arca, e o Senhor fechou de fora, na noite XVII',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(27, 5, 6)],
        source: [
          ['JUB', 5, 22]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550027',
        name: 'E as águas desapareceram acima da Terra na quinta semana em seu sétimo ano, e no décimo sétimo dia do segundo mês a terra estava seca.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(27, 5, 7)],
        source: [
          ['JUB', 5, 30]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550028',
        name: 'na sétima semana, no primeiro ano do mesmo, neste jubileu, Noé plantou vinha na montanha em que a arca descansou, chamado Lubar, uma das montanhas de Ararate.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(27, 7, 1)],
        source: [
          ['JUB', 7, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550029',
        name: 'E no ano do jubileu vigésimo oitavo Noé começou a intimar a filhos de seus filhos os preceitos e mandamentos, e todos os julgamentos que ele sabia',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(28, 1, 1)],
        source: [
          ['JUB', 7, 20]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550030',
        name: 'No vigésimo nono jubileu, na primeira semana, no início desta Arpachshad tomou para si uma esposa e seu nome era Rasu\'eja, a filha de Susan, a filha de Elam',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(29, 1, 1)],
        source: [
          ['JUB', 8, 1]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550031',
        name: 'lhe deu um filho no terceiro ano, nesta semana, e ele chamou o seu nome Kainam (filho de Arpachshad)',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(29, 1, 3)],
        source: [
          ['JUB', 8, 2]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550032',
        name: 'no ano do jubileu trigésima, na segunda semana, no primeiro ano dele, ele tomou para si uma esposa, e seu nome era Melka, a filha do Madai, filho de Jafé',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(30, 2, 1)],
        source: [
          ['JUB', 8, 5]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550033',
        name: 'no quarto ano, que gerou um filho, e chamou o seu nome Selá',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(30, 2, 4)],
        source: [
          ['JUB', 8, 5],
          ['JUB', 8, 6]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550034',
        name: 'Selá cresceu e tomou para si uma esposa, e seu nome era Mu\'ak, filha de Kesed, irmão de seu pai, em um trigésimo do jubileu e, na quinta semana, no primeiro ano',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(30, 5, 1)],
        source: [
          ['JUB', 8, 6]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550035',
        name: 'E ela lhe deu um filho, no quinto ano do mesmo, e ele pôs o nome de Eber',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(30, 5, 5)],
        source: [
          ['JUB', 8, 7]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550036',
        name: 'Eber tomou para si uma esposa, e seu nome era Azurad, filha de Nebrod, no trigésimo segundo Jubileu, na sétima semana, no seu terceiro ano.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(32, 7, 3)],
        source: [
          ['JUB', 8, 7],
          ['JUB', 8, 8]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550037',
        name: 'E no seu sexto ano, ela deu-lhe o filho, e chamou o seu nome Pelegue',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(32, 7, 6)],
        source: [
          ['JUB', 8, 9]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550038',
        name: 'No início do jubileu trigésimo terceiro que divide a Terra em três partes, por Sem e Jafé e Cam, segundo a herança de cada um',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(33, 1, 1)],
        source: [
          ['JUB', 8, 10]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550039',
        name: 'E, na terceira semana deste jubileu dos demônios imundos começaram a desviar os filhos de Noé, e fazer errar e destruí-los.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(33, 3, 1)],
        source: [
          ['JUB', 10.1, 10.2 ]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550040',
        name: 'E Noé dormiu com seus pais, e foi sepultado em Monte Lubar na terra de Ararate. Novecentos e cinquenta anos, ele completou em sua vida, dezenove jubileus e duas semanas e cinco anos e, em sua vida na terra.',
        addYears: ['440e8400-e29b-41d4-a716-553311550019', 950],
        source: [
          ['JUB', 10, 16 ],
          ['JUB', 10, 17 ]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550041',
        name: 'E nos três e jubileu trigésimo, no primeiro ano na segunda semana, Peleg tomou para si uma esposa, cujo nome era Lomná filha de Sina\'ar',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(30, 2, 1)],
        source: [
          ['JUB', 10, 18 ]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550042',
        name: 'E ela lhe deu um filho no quarto ano desta semana, e ele chamou o seu nome Reu',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(30, 2, 4)],
        source: [
          ['JUB', 10, 18 ]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550043',
        name: 'E eles começaram a construir, e na quarta semana fizeram tijolos com fogo, e os tijolos serviram-lhes de pedra, e barro com que cimentaram juntos era asfalto que sai do mar',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(30, 4, 1)],
        source: [
          ['JUB', 10, 20 ],
          ['JUB', 10, 21 ]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550044',
        name: 'E eles construíram: quarenta e três anos eles foram construindo, a sua largura era de 203 tijolos, e a altura (de um tijolo) era o terceiro de uma, sua altura era de 5433 cúbitos e 2 palmos, e (a extensão de um parede foi) treze estádios (e dos outros trinta estádios).',
        addYears: ['440e8400-e29b-41d4-a716-553311550043', 43],
        source: [
          ['JUB', 10, 21 ],
          ['JUB', 10, 22 ]
        ]
      },

      {
        uuid: '440e8400-e29b-41d4-a716-553311550045',
        name: 'Na quarta semana no primeiro ano do seu início nas quatro e trigésimo jubileu, eles estavam dispersos da terra de Sinar.',
        addYears: ['440e8400-e29b-41d4-a716-553311550000', this.jubileeCalc(34, 1, 1)],
        source: [
          ['JUB', 10, 27 ]
        ]
      }
    ]
  };

//    [Capítulo 11]
//  1 º e no jubileu trigésimo quinto, na terceira semana, no primeiro ano do mesmo, Reu tomou para si
//  uma esposa, e seu nome era "Ora, a filha de 'Ur, filho de Kesed, e ela lhe deu um filho, e
//  2 Ele chamou o seu nome Seroh, no sétimo ano desta semana neste jubileu. E os filhos de Noé
//  começou a guerra em si, ter em cativeiro e matar uns aos outros, e para derramar o sangue dos
//  homens sobre a terra, e comer sangue, e para construir cidades fortes, e as paredes e torres, e
//  indivíduos (começou) a exaltar-se acima da nação, e para fundar o início dos reinos, e para ir para a
//  guerra contra o povo povo, e nação contra nação e cidade contra cidade, e todos (começou) de fazer
//  o mal, e para adquirir braços, e para ensinar os seus filhos da guerra, e eles começaram a capturar as
//  cidades e para vender
//  17três escravos do sexo masculino e feminino. E 'Ur, filho de Kesed, construiu a cidade de "Ara dos
//  caldeus, e chamou o seu nome após o seu nome e o nome de seu pai. E eles fizeram para si imagens
//  de fundição, e adoraram cada um ídolo, a imagem de fundição que tinham feito para eles, e eles
//  começaram a fazer imagens de escultura e simulacros imundo, e os espíritos malignos
//  5 assistida e seduzido (eles) em cometer a transgressão e a impureza. E o príncipe Mastema
//  esforçou-se para fazer tudo isso, e ele enviou outros espíritos, os que foram colocados sob a sua
//  mão, para fazer toda espécie de mal e do pecado, e toda sorte de transgressão, de corromper e
//  destruir,
//  6 e para derramar sangue sobre a terra. Por esta razão, ele chamou o nome da Seroh, Serugue, para
//  cada um
//  7 virou-se para fazer todo tipo de pecado e transgressão. E ele cresceu, e habitou em Ur dos
//  Caldeus, junto com o pai da mãe de sua esposa, e ele adorou ídolos, e ele tomou para si uma esposa
//  no ano do jubileu trigésimo sexto, na quinta semana, no primeiro ano º, e seu nome era Melka, a
//  filha
//  8 º da Kaber, a filha do irmão de seu pai. Naor e ela lhe deu, no primeiro ano desta semana, e ele
//  cresceu e habitou em Ur dos Caldeus, e seu pai ensinou-lhe as pesquisas dos
//  9 caldeus e augura nada de divino, de acordo com os sinais do céu. E no ano do jubileu trigésimo
//  sétimo na sexta semana, no primeiro ano dele, ele tomou para si uma esposa, e seu nome era
//  "Ijaska, o
//  Filha de 10 Nestag dos caldeus. Terah e ela lhe deu no sétimo ano desta semana.
//  11 E o príncipe Mastema enviou corvos e aves para devorar a semente que foi semeada na terra,
//  para destruir a terra, e roubar os filhos dos homens do seu trabalho. Antes que pudessem arar
//  12 na semente, os corvos escolhido (isto) a partir da superfície do solo. E por isso chamou o seu
//  nome Terah, porque os corvos e as aves reduziu-os à miséria e devorou suas
//  13 sementes. E os anos começaram a ser estéril, devido às aves, e comeram todas as frutas das
//  árvores das árvores: era só com muito esforço que eles poderiam poupar um pouco de todos os
//  frutos do
//  14 a terra em seus dias. E, neste jubileu trigésimo nono, na segunda semana no primeiro ano, Terah
//  tomou para si uma esposa, e seu nome era "Edna, a filha de" Abrão, a filha da irmã de seu pai. E no
//  sétimo ano desta semana ela deu-lhe um filho, e chamou o seu nome Abrão,
//  15, o nome do pai de sua mãe, pois ele havia morrido antes de sua filha havia concebido um filho.
//  16 E a criança começou a entender os erros da terra que todos se extraviaram, após imagens de
//  escultura e depois de a imundícia, e seu pai lhe ensinou a escrever, e ele foi de duas semanas de
//  anos, e ele
//  17 se separou de seu pai, que ele poderia não adorar ídolos com ele. E ele começou a orar ao
//  Criador de todas as coisas que Ele pode salvá-lo dos erros dos filhos de homens, e que
//  18 a sua parte e não deve cair de erro após a impureza e vileza. E o tempo veio de sementes para o
//  plantio de sementes sobre a terra, e todos eles saíram juntos para proteger suas sementes contra a
//  19 corvos, e Abrão saiu com aqueles que foram, e que a criança era um rapaz de quatorze anos. E
//  uma nuvem de corvos passou a devorar a semente, Abrão e correu para encontrá-los antes que se
//  estabeleceram no chão, e gritou para eles antes de eles se estabeleceram na terra para devorar as
//  sementes, e disse: 'Desce
//  20: não voltar ao lugar de onde vocês vieram, e que passou a girar para trás. E causados nuvens do
//  ravens (corvos)a voltar setenta vezes a dia e tudo a ravens (corvos)toda a terra
//  21 Quando Abrão estava lá não resolvida há muito como um todo. E todos os que estavam com ele
//  em toda a terra o viu chorar, e todos os corvos voltar, e seu nome tornou-se grande em todos os
//  22 a terra dos caldeus. E lá veio a ele este ano todos aqueles que desejavam semear, e foi com eles
//  até o momento da semeadura cessou, e que semeou sua terra, e esse ano eles trouxeram
//  23 casa bastante grão e comer e ficaram satisfeitos. E no primeiro ano da quinta semana Abrão
//  ensinou aqueles que fizeram implementos para os bois, os artesãos em madeira, e eles fizeram uma
//  18embarcação acima do solo, de frente para a armação do arado, a fim de colocar os respectivos
//  semente, e a semente daí caiu em cima da parte do arado, e estava escondido na terra, e eles já não
//  temia a
//  24 corvos. E desta maneira que eles fizeram (navios) acima do solo em todos os quadros do arado, e
//  semeadas e cultivadas todas as terras, conforme Abrão lhes ordenara, e já não temia as aves.


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

  jubileeCalc(numeroDoJubileuNoTexto: number, numeroDaSemana = 1, numeroDoAno = 1): number {
    return this.jubileuTempos.JUBILEU * (numeroDoJubileuNoTexto - 1) + this.jubileuTempos.SEMANA * (numeroDaSemana - 1) + numeroDoAno;
  }
}
