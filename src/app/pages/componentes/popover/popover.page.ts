import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage  {

  title : string = "Modal";
  
  constructor(
    public navCtrl:NavController,
  ) {  }
  
  voltar(){ this.navCtrl.navigateBack('/') }
}
