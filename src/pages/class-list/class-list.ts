import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdduserPage } from '../adduser/adduser';
import arrClass from '../../app/classArray';
import { classMates } from '../../app/classMates';
import arrFind from '../../app/arrayLocate';
import { Locate } from '../../app/Locate';
import { ProfileViewPage } from '../profile-view/profile-view';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



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

  expenses: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private sqlite: SQLite) {
  }


  ionViewDidLoad() {
    this.getData();
  }
  
  ionViewWillEnter() {
    this.getData();
  }
  
  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', null )
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM expense ORDER BY rowid DESC',[])
      .then(res => {
        this.expenses = [];
        for(var i=0; i<res.rows.length; i++) {
          this.expenses.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,type:res.rows.item(i).type,description:res.rows.item(i).description,amount:res.rows.item(i).amount})
        }
      })
      .catch(e => console.log(e));
      db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', null)
      .then(res => {
        if(res.rows.length>0) {
          this.totalIncome = parseInt(res.rows.item(0).totalIncome);
          this.balance = this.totalIncome-this.totalExpense;
        }
      })
      .catch(e => console.log(e));
      db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', null)
      .then(res => {
        if(res.rows.length>0) {
          this.totalExpense = parseInt(res.rows.item(0).totalExpense);
          this.balance = this.totalIncome-this.totalExpense;
        }
      })
    }).catch(e => console.log(e));
  }
  
  addData() {
    this.navCtrl.push(AdduserPage);
  }
  
  editData(rowid) {
    this.navCtrl.push(ProfileViewPage, {
      rowid:rowid
    });
  }
  
  deleteData(rowid) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
