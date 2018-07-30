import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassListPage } from '../class-list/class-list';
import { IonicPage, NavParams, Alert, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

    start(){
      this.navCtrl.setRoot(ClassListPage);

      const prompt = this.alertCtrl.create({
        title: 'No value',
        message: " please insert class member's details !",

        buttons: [
          {
            text: 'ok',
            handler: data => {
              console.log('Saved clicked');
              this.navCtrl.setRoot(ClassListPage);
            }
          }
        ]
      });
      prompt.present();
    }

}
