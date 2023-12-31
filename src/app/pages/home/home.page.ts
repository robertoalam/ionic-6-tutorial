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
    {title:'Card',icone:'grid-sharp',rota:'/card'},
    {title:'Datetime',icone:'calendar-sharp',rota:'/datetime'},
    {title:'Datetime Button',icone:'calendar-clear-sharp',rota:'/datetime-button'},
    {title:'Icones',icone:'color-palette-sharp',rota:'/icones'},
    {title:'Input',icone:'create-sharp',rota:'/input'},
    {title:'Loading',icone:'reload-sharp',rota:'/loading'},
    {title:'Modal',icone:'copy-sharp',rota:'/modal'},
    {title:'Popover',icone:'copy-sharp',rota:'/popover'},
    {title:'Radio',icone:'disc-sharp',rota:'/radio'},
    {title:'Select',icone:'pricetags-sharp',rota:'/select'},
    {title:'Tabs',icone:'link-sharp',rota:'/tabs'},
    {title:'Toast',icone:'notifications-sharp',rota:'/toast'},
    {title:'Toggle',icone:'flag-sharp',rota:'/toggle'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
