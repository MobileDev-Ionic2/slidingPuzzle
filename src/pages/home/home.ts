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
      state("north", style({ top:0, left:60})),
      state("northeast", style({ top:0, left:120})),
      state("west", style({ top:60, left:0})),
      state("center", style({ top:60, left:60})),
      state("east", style({ top:60, left:120})),
      state("southwest", style({ top:120, left:0})),
      state("south", style({ top:120, left:60})),
      state("southeast", style({ top:120, left:120})),
      transition('* => *', animate('300ms')),
    ])
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.addPieces();
  }
  
  @Input() visibility : string = 'shown';
  
  //@Input() animatedVisibility : boolean = true;
  animatedVisibility : string = "shown";

  btnClick() {
        this.visibility == "shown" ? this.visibility= "hidden" : this.visibility = "shown";
        console.log("visibility is now "+this.visibility);
  }

  btnClickAnimated() {
    this.animatedVisibility == "shown" ? this.animatedVisibility= "hidden" : this.animatedVisibility = "shown";
    console.log("animatedVisibility is now "+this.animatedVisibility);
  }

  emptyField : string = "south";
  pieces : Array<GamePiece> = [];

  //@Input() pos8:string = "southeast";

  addPieces()
  {
    //var gp:GamePiece = new GamePiece(1, "w");
    //this.pieces.push(gp);
    
    this.pieces.push(new GamePiece(1, "west"));
    this.pieces.push(new GamePiece(2, "northeast"));
    this.pieces.push(new GamePiece(3, "east"));
    this.pieces.push(new GamePiece(4, "northwest"));
    this.pieces.push(new GamePiece(5, "southwest"));
    this.pieces.push(new GamePiece(6, "north"));
    this.pieces.push(new GamePiece(7, "center"));
    this.pieces.push(new GamePiece(8, "southeast"));
  }

  pieceClicked(piece:GamePiece)
  {
    
    var tmpPos : string = piece.position;
    piece.position = this.emptyField;
    this.emptyField = tmpPos;
    //this.pos8 = "south"; // test works only for one

    console.log("piece clicked: " +piece.value + " " + piece.position)
    console.log("empty field: "+ this.emptyField);
  }
}
// a very good explanation of the new animation in angular2
//http://blog.thoughtram.io/angular/2016/09/16/angular-2-animation-important-concepts.html
