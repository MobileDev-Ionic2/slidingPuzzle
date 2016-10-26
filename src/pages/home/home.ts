import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Input, trigger, state, style, transition, animate} from '@angular/core';
import {GamePiece} from '../../models/gamePiece';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('visibilityChanged', [
      state("shown" , style({ opacity: 1, marginLeft: 0 })), 
      state("hidden", style({ opacity: 0, marginLeft: 20 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ]),
    trigger('puzzlePieceTouched', [
      state("northwest", style({ top:0, left:0})), 
      state("north", style({ top:0, left:0})),
      state("northeast", style({ top:0, left:0})),
      state("west", style({ top:0, left:0})),
      state("center", style({ top:0, left:0})),
      state("east", style({ top:0, left:0})),
      state("southwest", style({ top:0, left:0})),
      state("south", style({ top:0, left:0})),
      state("southeast", style({ top:0, left:0})),
    ])
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.addPieces();
  }
  
  visibility : string = 'shown';
  
  //@Input() animatedVisibility : boolean = true;
  @Input() animatedVisibility : string = "shown";

  btnClick() {
        this.visibility == "shown" ? this.visibility= "hidden" : this.visibility = "shown";
        console.log("visibility is now "+this.visibility);
  }

  btnClickAnimated() {
    this.animatedVisibility == "shown" ? this.animatedVisibility= "hidden" : this.animatedVisibility = "shown";
    console.log("animatedVisibility is now "+this.animatedVisibility);
  }

  emptyField : string = "s";
  pieces : Array<GamePiece> = [];

  addPieces()
  {
    //var gp:GamePiece = new GamePiece(1, "w");
    //this.pieces.push(gp);
    
    this.pieces.push(new GamePiece(1, "w"));
    this.pieces.push(new GamePiece(2, "ne"));
    this.pieces.push(new GamePiece(3, "e"));
    this.pieces.push(new GamePiece(4, "nw"));
    this.pieces.push(new GamePiece(5, "sw"));
    this.pieces.push(new GamePiece(6, "n"));
    this.pieces.push(new GamePiece(7, "c"));
    this.pieces.push(new GamePiece(8, "se"));
  }

  pieceClicked(piece:GamePiece)
  {
    console.log(piece.value + piece.position)
  }
}
// a very good explanation of the new animation in angular2
//http://blog.thoughtram.io/angular/2016/09/16/angular-2-animation-important-concepts.html
