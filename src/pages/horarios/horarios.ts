import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { MissaPage, ExpedientePage } from '../pages';


@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html'
})
export class HorariosPage {
  value: any;
  MissaPageTab = MissaPage;
  ExpedientePageTab = ExpedientePage;

  constructor(public nav: NavController, public navParams: NavParams) {
      this.value = this.navParams.data; 
  }

  goHome(){
    //this.nav.push(MyTeamsPage);
    this.nav.popToRoot();
  }

}
