import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage  {

  title : string = "Toggle";
  
  constructor(
    public navCtrl:NavController,
  ) {  }
  
  voltar(){ this.navCtrl.navigateBack('/') }
}
