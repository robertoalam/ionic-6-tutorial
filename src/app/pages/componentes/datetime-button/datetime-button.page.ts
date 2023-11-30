import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datetime-button',
  templateUrl: './datetime-button.page.html',
  styleUrls: ['./datetime-button.page.scss'],
})
export class DatetimeButtonPage {
  title : string = "Datetime Button";

  constructor(
    public navCtrl:NavController,
  ) { }

  voltar(){ this.navCtrl.navigateBack('/') }
}
