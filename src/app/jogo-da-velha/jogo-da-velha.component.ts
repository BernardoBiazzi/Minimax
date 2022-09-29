import { Component, Input, OnInit } from '@angular/core';

export interface Jogodavelha {
  blocos: Array<string>,
  points: number
}

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  @Input() jogodavelha: Jogodavelha = {blocos: [], points: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
