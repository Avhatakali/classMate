import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import arrClass from '../../app/classArray';
import arrFind from '../../app/arrayLocate';
import { classMates } from '../../app/classMates';
import { ClassListPage } from '../class-list/class-list';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfileViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-view',
  templateUrl: 'profile-view.html',
})
export class ProfileViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileViewPage');
  }

  num = arrFind[0];

  clName = arrClass[this.num].name;
  clSurname = arrClass[this.num].surname;
  clId = arrClass[this.num].id;
  clgender = arrClass[this.num].gender;
  clemail = arrClass[this.num].email;
  claddress = arrClass[this.num].address;

  updateClass(name,surname,id,gender,email,address)
  {

    let objct= new classMates(name,surname,id,gender,email,address);

    arrClass.splice(this.num,1,objct);
    console.log(objct);
    const prompt = this.alertCtrl.create({
      title: 'update',
      message: " member details have being updated ",
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

  delete(){
    const confirm = this.alertCtrl.create({
      title: 'Delete',
      message: ' are you sure you want to delete class mate ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            
            this.navCtrl.push(ProfileViewPage);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            arrClass.splice(arrFind[0],1);
            console.log(arrClass); 

           this.navCtrl.setRoot(ClassListPage);
          }
        }
      ]
    });
    confirm.present();    
  }
}
