import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('visibilityChanged', [
      state("shown" , style({ opacity: 1, marginLeft: 0 })), 
      state("hidden", style({ opacity: 0, marginLeft: 20 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
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
}

// a very good explanation of the new animation in angular2
//http://blog.thoughtram.io/angular/2016/09/16/angular-2-animation-important-concepts.html
