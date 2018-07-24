import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassListPage } from '../class-list/class-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    start(){
      this.navCtrl.setRoot(ClassListPage);
    }

}
