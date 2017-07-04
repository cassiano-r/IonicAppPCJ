import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-informativo',
  templateUrl: 'informativo.html'
})
export class InformativoPage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider,public alertCtrl: AlertController,
  public toastCtrl: ToastController) {
    //this.shoppingItems = this.firebaseProvider.getShoppingItems();
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
 
  removeItem(id) {
    let confirm = this.alertCtrl.create({
      title: 'Confirma?',
      message: 'Deseja apagar essa informação?',
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
            this.firebaseProvider.removeItem(id);
          }
        }
      ]
    });
    confirm.present();    
  }
}
