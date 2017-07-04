import { Component, ViewChild } from '@angular/core';
import { Events, LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HomePage, ParoquiaPage, HorariosPage, ContactPage, AboutPage, TabsPage, LocalizacaoPage, InformativoPage } from '../pages/pages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public iab: InAppBrowser) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToLiturgia(){
        const browser = this.iab.create('http://liturgiadiaria.cnbb.org.br/app/user/user/UserView.php');//this.iab.create('http://liturgia.cancaonova.com/');
  }

   goHome() {
    this.nav.push(HomePage);
  }

  goToParoquia(){
    this.nav.push(ParoquiaPage);
  }

  goToHorarios(){
    this.nav.push(HorariosPage);
  }

  goToContato(){
    this.nav.push(ContactPage);
  }

  goToSobre(){
    this.nav.push(AboutPage);
  }

  goToFolheto(){
    const browser = this.iab.create('https://issuu.com/paroquiacoracaodejesus');
  }

  goToLocalizacao(){
    this.nav.push(LocalizacaoPage);
  }
  
  goToInformativo(){
    this.nav.push(InformativoPage);
  }
}
