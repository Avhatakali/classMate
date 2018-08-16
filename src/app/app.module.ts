import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdduserPage } from '../pages/adduser/adduser';
import { ClassListPage } from '../pages/class-list/class-list';
import { ProfileViewPage } from '../pages/profile-view/profile-view';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdduserPage,
    ClassListPage,
    ProfileViewPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdduserPage,
    ClassListPage,
    ProfileViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast
  ]
})
export class AppModule {}
