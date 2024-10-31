import { Component } from '@angular/core';

interface ImagesPath{
  path:string;
  name:string;
  price:number;
}

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})


export class CardViewComponent {

  images:ImagesPath[]=[
    { path:"../../assets/img/keyboard.png",
      name:"Key Board",
      price:2000
    },
    {
      path: "../../assets/img/moniter.png",
      name:"Moniter",
      price:10000
    },
    {
      path: "../../assets/img/printer.png",
      name:"Printer",
      price:15000
    },
    {
      path:"../../assets/img/smart watch.png",
      name:"Smart Watch",
      price:2999
    },
    {
      path:"../../assets/img/light.png",
      name:"Light",
      price:199
    },
    { path:"../../assets/img/keyboard.png",
      name:"Key Board",
      price:2000
    },
    {
      path: "../../assets/img/moniter.png",
      name:"Moniter",
      price:10000
    },
    {
      path: "../../assets/img/printer.png",
      name:"Printer",
      price:15000
    },
    {
      path:"../../assets/img/smart watch.png",
      name:"Smart Watch",
      price:2999
    },
    {
      path:"../../assets/img/light.png",
      name:"Light",
      price:199
    }
 
]
}
