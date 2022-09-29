import { Component, OnInit } from '@angular/core';
import { Jogodavelha } from './jogo-da-velha/jogo-da-velha.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public player = {X: '❌',O: '⭕​'};
  public whoStarts = this.player.X;

  public jogodavelhaInicial: Jogodavelha = {
    blocos: ['','','','','','','','',''],
    points: 0
  };

  public allPossibilities: Jogodavelha[][] = [];

  constructor() { }

  ngOnInit() {
    this.select(this.jogodavelhaInicial);
  }

  select(jogodavelha: Jogodavelha) {
    if (this.somebodyWins(jogodavelha.blocos)) return alert('Jogo encerrado');
    if (jogodavelha.points == -1) return alert('Jogo já selecionado anteriormente');
    if (jogodavelha.points == 0) jogodavelha.points = -1;

    this.whoStarts = (this.whoStarts == this.player.X) ? this.player.O : this.player.X;

    let emptySpaces: number[] = [];
    jogodavelha.blocos.forEach((space: string, index: number) => {
      if (space == '') emptySpaces.push(index);
    });

    if (emptySpaces) {

      let newJogosDaVelha: Jogodavelha[] = [];

      emptySpaces.forEach((emptySpace) => {
        let blocos = [...jogodavelha.blocos];
        blocos[emptySpace] = this.whoStarts;
        const newJogoDaVelha = {
          blocos: blocos,
          points: this.somebodyWins(blocos) ? 1 : 0
        };
        newJogosDaVelha.push(newJogoDaVelha);
      });

      this.allPossibilities.push(newJogosDaVelha);

    } else { alert('Jogo encerrado'); }

  }

  somebodyWins(blocos: Array<string>): boolean {
    return this.checkWinByPlayer(blocos, this.player.O) || this.checkWinByPlayer(blocos, this.player.X);
  }

  checkWinByPlayer(blocos: Array<string>, player: string): boolean {
    // Laterais
    if (blocos[0] == player && blocos[1] == player && blocos[2] == player) return true;
    if (blocos[2] == player && blocos[5] == player && blocos[8] == player) return true;
    if (blocos[6] == player && blocos[7] == player && blocos[8] == player) return true;
    if (blocos[0] == player && blocos[3] == player && blocos[6] == player) return true;
    // Diagonais
    if (blocos[0] == player && blocos[4] == player && blocos[8] == player) return true;
    if (blocos[2] == player && blocos[4] == player && blocos[6] == player) return true;
    // Centrais
    if (blocos[1] == player && blocos[4] == player && blocos[7] == player) return true;
    if (blocos[3] == player && blocos[4] == player && blocos[5] == player) return true;

    return false;
  }

  calculaMelhorOpcao() {

  }

}
