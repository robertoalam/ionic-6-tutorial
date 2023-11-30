import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {
  title : string = "Alert";
  
  alertButtons = ['Action'];

  constructor(
    public navCtrl:NavController,
    private alertCtrl:AlertController,
  ) { }

  async alertController(){
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },{
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },{
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },{
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

  voltar(){ this.navCtrl.navigateBack('/') }
}
