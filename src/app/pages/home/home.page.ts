import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  paginas:any = [
    {title:'Alert',icone:'checkmark-sharp',rota:'/alert'},
    {title:'Button',icone:'checkmark-sharp',rota:'/button'},
    {title:'Datetime',icone:'close-sharp',rota:'/datetime'},
    {title:'Input',icone:'checkmark-sharp',rota:'/input'},
    {title:'Loading',icone:'checkmark-sharp',rota:'/loading'},
    {title:'Modal',icone:'checkmark-sharp',rota:'/modal'},
    {title:'Toast',icone:'checkmark-sharp',rota:'/toast'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
