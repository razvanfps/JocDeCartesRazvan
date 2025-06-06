import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  displayCarta!: HTMLElement;
  fons!: string[];
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;
  imatges: string[] = ['/assets/img/profile/monkey.png','/assets/img/profile/pinguin.svg','/assets/img/profile/serious-woman.svg'];
  punts : number[] = [0,0,0]
  constructor(private router: Router) {}


  ngOnInit(): void {
    this.newGame();
    this.fons = ["background-color: red","background-color: orange","background-color: orange"]
    this.displayCarta = document.getElementById('displayCarta')!;
  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;

      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
  mostrarCarta(){
    this.displayCarta.innerText = "Nom de la carta: " + this.game?.playedCards[this.game?.playedCards.length-1]
  }



}
