import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { classMates } from '../../app/classMates';
import arrClass from '../../app/classArray';
<<<<<<< HEAD
import { empty } from '../../../node_modules/rxjs/Observer';
=======
import { ClassListPage } from '../class-list/class-list';

>>>>>>> 3be6f26f498537a48c25398ee9012ed64e7fd8e0

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

<<<<<<< HEAD
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
=======
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


          } else 
          
          for(let index = 0; index < arrClass.length; index++){
            var name = arrClass[index].name;
            var surname = arrClass[index].surname;
            var gender = arrClass[index].gender;
            var email = arrClass[index].email;
            var id =  arrClass[index].id;
            var address =  arrClass[index].address;
        }
          
          if(name == ' ' || surname == " " || id == " "|| gender == " " || email == " " || address == " " ){
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
>>>>>>> 3be6f26f498537a48c25398ee9012ed64e7fd8e0

}