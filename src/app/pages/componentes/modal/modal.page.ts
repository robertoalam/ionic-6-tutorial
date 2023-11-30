import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  title : string = "Modal";
  @ViewChild(IonModal) modal!: IonModal;
  
  constructor(
    public navCtrl:NavController,
    public modalCtrl:ModalController
  ) {  }
  
  message : string = 'Exemplo que utiliza gatilhos no próprio componente';
  name: string = "";

  cancel() { this.modal.dismiss(null, 'cancel'); }
  confirm() { this.modal.dismiss(this.name, 'confirm'); }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  voltar(){ this.navCtrl.navigateBack('/') }
}
