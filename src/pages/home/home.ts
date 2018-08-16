

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AdduserPage } from '../adduser/adduser';
import arrClass from '../../app/classArray';
import { classMates } from '../../app/classMates';
import arrFind from '../../app/arrayLocate';
import { Locate } from '../../app/Locate';
import {  NavParams, Alert, AlertController } from 'ionic-angular';



import { ClassListPage } from '../class-list/class-list';


import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ProfileViewPage } from '../profile-view/profile-view';

@Component({
  selector: 'page-class-list',
  templateUrl: 'home.html'
})
export class HomePage {

 

  constructor(public navCtrl: NavController, private sqlite: SQLite,public alertCtrl: AlertController) {

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
