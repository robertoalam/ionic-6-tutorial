import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  title : string = "TABS";
  
  constructor(
    public navCtrl:NavController,
  ) {  }
  
  voltar(){ this.navCtrl.navigateBack('/') }
}
