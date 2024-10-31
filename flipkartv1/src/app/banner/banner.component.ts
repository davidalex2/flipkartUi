import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Banner{
  path:string;
  content:string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})


export class BannerComponent {
  @Input()
  icon!: string;
  @Input() disabled = false;
  @Input() titleText = '';

  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  handleClick(event: Event) {
      if (!this.disabled) {
          this.onClick.emit(event);
      }

      event.stopPropagation();
      event.preventDefault();
  }

  slides:Banner[]=[
    {path:"../../assets/img/banner1.png",
     content:"This is the text for banner1"
    },
    {path:"../../assets/img/banner2.png",
      content:"This is the text for banner1"
     },
     {path:"../../assets/img/banner3.png",
      content:"This is the text for banner1"
     },
     {path:"../../assets/img/banner5.png",
      content:"This is the text for banner1"
     }
  ];

  
}
