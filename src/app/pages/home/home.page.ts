import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  paginas:any = [
    {title:'Alert',icone:'checkmark-sharp',rota:'/alerta'},
    {title:'Button',icone:'checkmark-sharp',rota:'/button'},
    {title:'Input',icone:'close-sharp',rota:'/input'},
    {title:'Modal',icone:'close-sharp',rota:'/modal'},
    {title:'Toast',icone:'close-sharp',rota:'/toast'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
