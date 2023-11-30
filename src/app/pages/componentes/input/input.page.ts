import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {

  title : string = "Input";
  
  constructor(
    public navCtrl:NavController,
  ) { }

  voltar(){ this.navCtrl.navigateBack('/') }
}
