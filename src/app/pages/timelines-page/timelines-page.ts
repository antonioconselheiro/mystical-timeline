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
      }
    ]
  };

// [Capítulo 8]
// 1 No vigésimo nono jubileu, na primeira semana, no início desta Arpachshad tomou para si uma
// esposa e seu nome era Rasu'eja, a filha de Susan, a filha de Elam, e ela
// 2 lhe deu um filho no terceiro ano, nesta semana, e ele chamou o seu nome Kainam. E o filho
// cresceu, e seu pai lhe ensinou a escrever, e ele passou a procurar por si mesmo um lugar onde ele
// poderia aproveitar para
// 3-se de uma cidade. E ele encontrou um escrito que o ex-(gerações) tinha esculpido na rocha, e ele
// leu o que estava nela, e ele transcreveu e pecou devido a ele, pois ele continha a doutrina da
// Sentinelas em conformidade com o que eles usaram para observar o presságios do sol e da lua e
// 4 estrelas em todos os sinais do céu. E ele escreveu e não disse nada a respeito dele, pois ele foi
// 5 medo de falar sobre isso a Noé para que ele não deveria ficar bravo com ele por conta disso. E no
// ano do jubileu trigésima, na segunda semana, no primeiro ano dele, ele tomou para si uma esposa, e
// seu nome era Melka, a filha do Madai, filho de Jafé, e no quarto ano, que gerou um filho, e
// 6 chamou o seu nome Selá; pois ele disse: 'Em verdade vos foram enviados. [E no quarto ano ele
// nasceu], e Selá cresceu e tomou para si uma esposa, e seu nome era Mu'ak, filha de Kesed, irmão de
// 13seu pai, em um trigésimo do jubileu e, na quinta semana , no primeiro ano
// 7 º. E ela lhe deu um filho, no quinto ano do mesmo, e ele pôs o nome de Eber, e ele tomou para si
// uma esposa, e seu nome era "Azurad, filha de Nebrod, no trigésimo segundo
// 8 Jubileu, na sétima semana, no seu terceiro ano. E no seu sexto ano, ela deu-lhe o filho, e chamou
// o seu nome Pelegue, pois nos dias em que ele nasceu os filhos de Noé começou
// 9 de dividir a terra entre si: por isso chamou o seu nome Peleg. E eles
// 10 dividido (isto) secretamente entre si, e disse que a Noé. E sucedeu que, no início do jubileu
// trigésimo terceiro que divide a Terra em três partes, por Sem e Jafé e Cam, segundo a herança de
// cada um, no primeiro ano na primeira semana, quando um de nós
// 11 que tinham sido enviados, foi com eles. E chamou seus filhos, e se aproximaram a ele, eles e
// seus filhos, e ele dividiu a terra em lotes, que seus três filhos estavam a tomar posse, e estendeu suas
// mãos, e teve a redação de no seio de Noé, seu pai.
// 12 E lá veio a escrever como muito Sem é o meio da terra que ele deveria ter como herança para si e
// para seus filhos, para as gerações de eternidade, a partir do meio da serra de Rafa, a partir da foz do
// água do rio Tina, e sua parcela vai para o oeste pelo meio deste rio, e se estende até que se chegue a
// água dos abismos, dos quais o rio avança e despeja suas águas no mar Me'at, e este rio desagua no
// mar grande. E tudo o que é para o norte é Jafé, e tudo o que é para o
// 13 sul pertence Sem. E estende-se até alcançar Karaso: este é no seio da língua
// 14, que olha para o sul. E a sua parte se estende ao longo do mar grande, e se estende em linha reta
// até atingir o oeste da língua, que olha para o sul: por esse mar é
// 15 nomeado a língua do mar do Egito. E acontece daqui para o sul em direção à foz do grande mar
// na costa do (a) As águas, e se estende até o oeste para 'Afra, e estende-se até alcançar as águas do
// rio Giom, e ao sul das águas do Gião, a
// 16 margens deste rio. E isso se estende para o leste, até chegar ao Jardim do Éden, para o sul do
// mesmo, [a] ao sul e do leste de toda a terra de Éden e de todo o leste, ele se vira para o leste e
// prossegue até que atinge o leste da montanha chamado Rafa, e desce
// 17 para o banco da boca do rio Tina. Esta parte saiu por sorteio para Sem e seus filhos,
// 18 que deveriam possuir para sempre aos seus gerações para sempre. E Noé alegrou-se que esta
// parcela saiu de Sem e para seus filhos, e ele se lembrou de tudo que tinha falado com a boca na
// profecia, pois ele havia dito:
// "Bendito seja o Senhor Deus de Sem
// E que o Senhor habita na casa do Sem.
// 19 E ele sabia que o Jardim do Éden é o santo dos santos, ea habitação do Senhor, e Mount Sinai no
// centro do deserto, e Monte Sião, o centro do umbigo da terra, esses três
// 20 foram criados como locais sagrados frente para o outro. E abençoou Deus dos deuses, que tinha
// colocado o
// 21 Palavra do Senhor em sua boca, e o Senhor para sempre. E ele sabia que uma parte abençoado e
// uma bênção tinha chegado a Sem e seus filhos até as gerações para sempre, toda a terra do Éden e
// toda a terra do mar Vermelho, e toda a terra do oriente e na Índia, e na Mar Vermelho e as
// montanhas dos mesmos, e toda a terra de Basã, e todas as terras do Líbano e as ilhas de Kaftur, e
// todas as montanhas de Sanir e 'Amana, e as montanhas da Assíria, no norte, e toda a terra do Elam,
// Assíria, e Babel, e Susan e Ma'edai, e todas as montanhas de Ararate, e toda a região além do mar,
// que é além das montanhas da Assíria, para o
// 22 norte, uma terra abençoada e espaçoso, e tudo o que é muito bom. E para Ham saiu a segunda
// parcela, além do Giom em direção ao sul, à direita do Jardim, e que se estende em direção ao sul e
// que se estende a todas as montanhas de fogo, e se estende em direção ao oeste com o mar de «Atel e
// se estende em direção ao oeste até atingir o mar de Ma'uk que (mar) em que
// 23 tudo o que não é destruído desce. E ela sai em direção ao norte até os limites de Gadir, e sai para
// a costa das águas do mar para as águas do grande mar até que se aproxima para o rio Giom, e vai ao
// longo do rio até que Giom atinge o direito do Jardim
// 1424 do Éden. E esta é a terra que saiu de Ham como a parte que ele estava a ocupar
// 25 para sempre para si e seus filhos até suas gerações, para sempre. E para Jafé saíram da terceira
// parte além do rio Tina ao norte da vazão de suas águas, e se estende ao norte-
// 26 de leste a toda a região de Gog e de todos os países do leste da mesma. E isso se estende para
// norte até ao norte, e se estende até as montanhas de Quelt em direção ao norte, e para o mar de
// 27 Ma'uk, e sai para o leste de Gadir na medida em que a região das águas do mar. E isso se estende
// até que se aproxima do oeste de Fara e retorna para "Aferag, e que se estende de leste
// 28 para as águas do mar de Me'at. E isso se estende para a região do rio Tina, em direcção nordeste,
// até que se aproxima do limite de suas águas para a montanha Rafa, e gira
// 29 rodada para o norte. Esta é a terra que saiu de Jafé e seus filhos como parte de sua herança que
// ele deve possuir para si e para seus filhos, para as suas gerações para sempre;
// 30 cinco ilhas grandes, e uma grande terra no norte. Mas é fria, e as terras de Ham está quente, e as
// terras de Sem é nem quente nem fria, que é misturado a frio e calor.

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
    return this.jubileuTempos.JUBILEU * (numeroDoJubileuNoTexto - 1) + this.jubileuTempos.SEMANA * (numeroDaSemana - 1) + (numeroDoAno - 1);
  }
}
