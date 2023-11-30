import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  paginas:any = [
    {title:'Alert',icone:'megaphone-sharp',rota:'/alert'},
    {title:'Button',icone:'push-sharp',rota:'/button'},
    {title:'Datetime',icone:'calendar-sharp',rota:'/datetime'},
    {title:'Datetime Button',icone:'calendar-clear-sharp',rota:'/datetime-button'},
    {title:'Input',icone:'create-sharp',rota:'/input'},
    {title:'Loading',icone:'checkmark-sharp',rota:'/loading'},
    {title:'Modal',icone:'copy-sharp',rota:'/modal'},
    {title:'Popover',icone:'copy-sharp',rota:'/popover'},
    {title:'Toast',icone:'notifications-sharp',rota:'/toast'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
