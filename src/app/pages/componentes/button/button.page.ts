import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage  {
  title : string = "Button";
  
  constructor(
    public navCtrl:NavController,
  ) { }


  voltar(){ this.navCtrl.navigateBack('/') }
}
