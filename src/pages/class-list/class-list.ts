import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdduserPage } from '../adduser/adduser';
import arrClass from '../../app/classArray';
import { classMates } from '../../app/classMates';
import arrFind from '../../app/arrayLocate';
import { Locate } from '../../app/Locate';
import { ProfileViewPage } from '../profile-view/profile-view';



/**
 * Generated class for the ClassListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-list',
  templateUrl: 'class-list.html',
})
export class ClassListPage {

  arr = arrClass;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassListPage');
  }

      add(){
        this.navCtrl.push(AdduserPage);
      }

     
      view(u) {
      console.log(u);
      
      console.log(arrFind);
      arrFind.splice(0,1,u);

      if(arrFind != null){
        this.navCtrl.push(ProfileViewPage);
      }
    }

}
