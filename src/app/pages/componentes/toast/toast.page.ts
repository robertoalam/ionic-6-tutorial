import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage  {
  
  title : string = "Toast";

  constructor(
    public navCtrl:NavController,
    public toastCtrl:ToastController

  ) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Teste do toast controller!',
      duration: 1500,
      position: position,
    });
    await toast.present();
  }

  start(){ this.toastCtrl.create() }

  voltar(){ this.navCtrl.navigateBack('/') }
}
