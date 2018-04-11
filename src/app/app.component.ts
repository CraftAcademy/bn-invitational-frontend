import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { OneSignal } from '@ionic-native/onesignal';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AthletePage } from '../pages/athlete/athlete';
import { ResultsPage } from '../pages/results/results';
import { SplashPage } from '../pages/splash/splash';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  @ViewChild(Nav) nav;

  constructor(platform: Platform, 
      private oneSignal: OneSignal, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              modalCtrl: ModalController) {

    platform.ready().then(() => {
      
      let splash = modalCtrl.create(SplashPage);
      splash.present();
      
        this.setupPush();
      
    });

  }
  
  setupPush() {
    this.oneSignal.startInit('316f8be0-f2fa-4323-9d04-86a62f80dac4', '203539919772');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      console.log('We opened a push:', data);

      let action = data.notification.payload.additionalData['action'];
      let actionId = data.notification.payload.additionalData['id'];
      
      if(action === "openPage") {
        this.nav.push(AthletePage, { athlete_id: actionId });
      } 

      else if(action === "openResults") {
        this.nav.push(ResultsPage);
      }

    });
    this.oneSignal.endInit();

  }
}
