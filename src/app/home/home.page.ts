import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private faio: FingerprintAIO,) { }

  showFingerprint() {
    this.faio.show({

    })
      .then(result => {
        this.navCtrl.navigateRoot('congr')
      })
      .catch(err => {
        console.log('Err: ', err);
      })
  }

}
