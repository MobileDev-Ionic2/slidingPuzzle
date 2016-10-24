import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  animations: [

  ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  //http://blog.thoughtram.io/angular/2016/09/16/angular-2-animation-important-concepts.html
  visibility = 'shown';

  btnClick() {
    this.visibility == "shown" ? this.visibility= "hidden" : this.visibility = "shown";
  }
}
