import { Component } from '@angular/core';

@Component({
  selector: 'app-home-copy',
  templateUrl: './home-copy.component.html',
  styleUrl: './home-copy.component.css'
})
export class HomeCopyComponent {

  images:string[]=[
    "../../assets/img/keyboard.png",
    "../../assets/img/moniter.png",
    "../../assets/img/printer.png",
    "../../assets/img/smart watch.png",
    "../../assets/img/light.png" 
  ]
}
