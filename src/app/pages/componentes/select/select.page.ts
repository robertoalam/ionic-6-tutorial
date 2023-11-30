import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage  {

  title : string = "Select";
  
  constructor(
    public navCtrl:NavController,
  ) {  }
  
  voltar(){ this.navCtrl.navigateBack('/') }
}
