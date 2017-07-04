import { Component } from '@angular/core';
import { NavController, FabContainer, NavParams, AlertController, ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
      shoppingItems: FirebaseListObservable<any[]>;
      newItem = '';

  constructor(public navCtrl: NavController,public iab: InAppBrowser,public firebaseProvider: FirebaseProvider,public alertCtrl: AlertController,
  public toastCtrl: ToastController) {

  }

  goToYoutube()  {
        const browser = this.iab.create('https://www.youtube.com/channel/UCXj7D-gXEgOl9DCveFEFYYQ');
  }

  goToFacebook() {
        const browser = this.iab.create('https://www.facebook.com/ParoquiaCoracaoDeJesus/');
  }

  goToInstagram(){
        const browser = this.iab.create('https://www.instagram.com/coracaodejesussjc/');
  }

  addItem() {
    let confirm = this.alertCtrl.create({
      title: 'Confirma?',
      message: 'Deseja gravar essa informação?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            this.firebaseProvider.addItem(this.newItem);
            let toast = this.toastCtrl.create({
                  message: 'Obrigado pela sua sugestão!',
                  duration: 3000
                });
                toast.present();
          }
        }
      ]
    });
    confirm.present();
  }

}
