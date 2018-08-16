import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { classMates } from '../../app/classMates';
import arrClass from '../../app/classArray';
import { empty } from '../../../node_modules/rxjs/Observer';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {

  data = { date:"", type:"", description:"", amount:0 };  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private sqlite: SQLite,
    private toast: Toast) {
  }

  saveData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)',[this.data.date,this.data.type,this.data.description,this.data.amount])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }  

}