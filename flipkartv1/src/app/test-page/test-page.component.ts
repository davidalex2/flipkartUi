import { Component ,OnInit} from '@angular/core';
import { ImageproviderService } from '../imageprovider.service';

export class ImageEntity{
  name!:string;
  path!:string;
  id!:number;

}

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent implements OnInit{

  imageContainer!:ImageEntity[];
  imagepath:string="assets/img/"

  
  constructor(private imageService:ImageproviderService){}
  ngOnInit() {
    this.fetchImages();
  }
  fetchImages() {
    this.imageService.getUrl().subscribe(
      {
        next:(res)=>{
          this.imageContainer=res,
          console.log(res)
        },
        error:(err)=>{throw err}
      }
    );
  }

}
