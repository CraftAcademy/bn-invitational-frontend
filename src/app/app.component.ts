import { Component } from '@angular/core';
import { Platform, Modal, ModalController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { OneSignal } from '@ionic-native/onesignal';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SplashPage } from '../pages/splash/splash';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, 
      private oneSignal: OneSignal, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              modalCtrl: ModalController,
      private alertCtrl: AlertController) {
    platform.ready().then(() => {
      
      let splash = modalCtrl.create(SplashPage);
      splash.present();
      // if(platform.is('cordova')) {
        this.setupPush();
      // }
    });

  }
  
  setupPush() {
    this.oneSignal.startInit('316f8be0-f2fa-4323-9d04-86a62f80dac4');

    this.oneSignal.handleNotificationReceived().subscribe(data => {
      console.log('We recieved a push:', data);
    });

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      console.log('We opened a push:', data);

      let title = data.notification.payload.title;
      let message = data.notification.payload.body;

      let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: [
          {
            text: 'Close',
            role: 'cancel'
          }
        ]

      })
      alert.present();
    });
    this.oneSignal.endInit();

  }

}
