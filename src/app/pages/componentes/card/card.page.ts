import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage {
  title : string = "Cards";

  constructor(
    public navCtrl:NavController,
  ) {  }
  
  voltar(){ this.navCtrl.navigateBack('/') }
}