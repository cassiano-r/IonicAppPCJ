import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HorariosPage } from "../pages/pages";
import { ParoquiaPage } from "../pages/paroquia/paroquia"
import { ExpedientePage } from "../pages/expediente/expediente";
import { MissaPage } from "../pages/missa/missa";
import { InformativoPage} from "../pages/informativo/informativo";
import { LocalizacaoPage} from "../pages/localizacao/localizacao";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtCKMyIvSdCriQJhfulkjCWBxWOlvkkDg",
    authDomain: "paroquiacoracaodejesusapp.firebaseio.com",
    databaseURL: "https://paroquiacoracaodejesusapp.firebaseio.com",
    projectId: "paroquiacoracaodejesusapp",
    storageBucket: "paroquiacoracaodejesusapp.firebaseio.com",
    messagingSenderId: "946763842405"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ParoquiaPage,
    HorariosPage,
    ExpedientePage,
    MissaPage,
    InformativoPage,
    LocalizacaoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ParoquiaPage,
    HorariosPage,
    ExpedientePage,
    MissaPage,
    InformativoPage,
    LocalizacaoPage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    FirebaseProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
