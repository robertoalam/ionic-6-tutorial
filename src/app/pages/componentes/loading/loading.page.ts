import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit{

  title : string = "Loading";
  
  constructor(
    public navCtrl:NavController,
    public loadCtrl:LoadingController,
  ) { }
  
  ngOnInit() { this.start(); }

  async start(){
    let loading = await this.loadCtrl.create({message:'carregando ...'}) 
    loading.present()
    setTimeout( function(){ loading.dismiss() },2500)
  }

  voltar(){ this.navCtrl.navigateBack('/') }
}
