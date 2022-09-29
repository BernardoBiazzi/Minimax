import { Component, OnInit } from '@angular/core';
import { Jogodavelha } from './jogo-da-velha/jogo-da-velha.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public whoStarts = '';

  public jogodavelhaInicial = {
    blocos: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    points: 0
  };

  public jogosdavelha: Jogodavelha[] = [];
  public allPossibilities: Jogodavelha[][] = [];

  constructor() { }

  ngOnInit() {
    this.select(this.jogodavelhaInicial);
  }

  select(jogodavelha: Jogodavelha) {
    if (this.somebodyWins(jogodavelha.blocos)) return alert('Jogo encerrado');
    if (jogodavelha.points == -1) return alert('Jogo já selecionado anteriormente');
    if (jogodavelha.points == 0) jogodavelha.points = -1;

    this.whoStarts = this.whoStarts == 'O' ? 'X' : 'O';
    const Jogodavelha = jogodavelha;
    let emptySpaces: number[] = [];

    jogodavelha.blocos.forEach((space: any, index: number) => {
      if (space == undefined) emptySpaces.push(index);
    });

    let newJogosDaVelha: Jogodavelha[] = [];

    if (emptySpaces) {

      emptySpaces.forEach((emptySpace) => {
        let blocos = [...Jogodavelha.blocos]
        blocos[emptySpace] = this.whoStarts;
        let newJogoDaVelha = {blocos: blocos, points: this.somebodyWins(blocos) ? 1 : 0};
        newJogosDaVelha.push(newJogoDaVelha);
      });

      this.allPossibilities.push(newJogosDaVelha);
    }
  }

  somebodyWins(blocos: Array<any>): boolean {

    // Laterais
    if (blocos[0] == 'O' && blocos[1] == 'O' && blocos[2] == 'O') return true;
    if (blocos[2] == 'O' && blocos[5] == 'O' && blocos[8] == 'O') return true;
    if (blocos[6] == 'O' && blocos[7] == 'O' && blocos[8] == 'O') return true;
    if (blocos[0] == 'O' && blocos[3] == 'O' && blocos[6] == 'O') return true;
    // Diagonais
    if (blocos[0] == 'O' && blocos[4] == 'O' && blocos[8] == 'O') return true;
    if (blocos[2] == 'O' && blocos[4] == 'O' && blocos[6] == 'O') return true;

    // Laterais
    if (blocos[0] == 'X' && blocos[1] == 'X' && blocos[2] == 'X') return true;
    if (blocos[2] == 'X' && blocos[5] == 'X' && blocos[8] == 'X') return true;
    if (blocos[6] == 'X' && blocos[7] == 'X' && blocos[8] == 'X') return true;
    if (blocos[0] == 'X' && blocos[3] == 'X' && blocos[6] == 'X') return true;
    // Diagonais
    if (blocos[0] == 'X' && blocos[4] == 'X' && blocos[8] == 'X') return true;
    if (blocos[2] == 'X' && blocos[4] == 'X' && blocos[6] == 'X') return true;

    else return false;
  }

  calculaMelhorOpcao() {

  }

}
