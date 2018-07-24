import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { classMates } from '../../app/classMates';
import arrClass from '../../app/classArray';
import { ClassListPage } from '../class-list/class-list';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }

  addUser(name,surname,id,gender,email,address){

          let obj = new classMates(name,surname,id,gender,email,address);


          if(arrClass != null){
             const prompt = this.alertCtrl.create({
              title: 'Confirmation',
              message: " class mate added successful !",

              buttons: [
                {
                  text: 'ok',
                  handler: data => {
                    console.log('Saved clicked');
                    arrClass.push(obj);
                    console.log(arrClass);

                    this.navCtrl.setRoot(ClassListPage);
                  }
                }
              ]
            });
            prompt.present();
          } else if(arrClass == null){
            const prompt = this.alertCtrl.create({
              title: 'No value',
              message: " please insert member's details !",

              buttons: [
                {
                  text: 'ok',
                  handler: data => {
                    console.log('Saved clicked');
                    this.navCtrl.setRoot(AdduserPage);
                  }
                }
              ]
            });
            prompt.present();
            
          }else{
            this.navCtrl.setRoot(AdduserPage);
          }
      }

}