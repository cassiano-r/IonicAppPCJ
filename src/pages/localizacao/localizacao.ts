import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html'
})
export class LocalizacaoPage {
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController,public iab: InAppBrowser) {

  }

  goToSantuario(){
    const browser = this.iab.create('https://www.google.com.br/maps/place/Par%C3%B3quia+Cora%C3%A7%C3%A3o+de+Jesus/@-23.2435395,-45.8876288,17z/data=!3m1!4b1!4m5!3m4!1s0x94cc4ab61afa0cab:0x82f18dfc9328c449!8m2!3d-23.2435395!4d-45.8854401');
  }

  goToMaria(){
    const browser = this.iab.create('https://www.google.com.br/maps/place/Igreja+Cora%C3%A7%C3%A3o+de+Maria/@-23.2491755,-45.8915421,16z/data=!4m8!1m2!2m1!1sparoquia+cora%C3%A7%C3%A3o+de+maria!3m4!1s0x94cdb54bfd68153f:0x9a3adfab7197fec1!8m2!3d-23.2548116!4d-45.8888893');
  }

  goToWagner(){
    const browser = this.iab.create('https://www.google.com/maps/@-23.2663578,-45.8856413,3a,82.2y,32.29h,84.37t/data=!3m6!1e1!3m4!1sJqqFse_VkAbk7RqoH_yszA!2e0!7i13312!8i6656');
  }

  goToFatima(){
    const browser = this.iab.create('https://www.google.com/maps/@-23.2593176,-45.8831322,3a,82.2y,135.47h,95.5t/data=!3m6!1e1!3m4!1smC6RFvwrc1_VTQYCUymI3Q!2e0!7i13312!8i6656');
  }

}
