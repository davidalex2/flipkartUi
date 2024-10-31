import { Component } from '@angular/core';
import { ImageproviderService } from '../imageprovider.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Images{
  path:string;
  name:string;
}
export class ImageEntity{
  name!:string;
  path!:string;
  id!:number;

}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

imageContainer!:ImageEntity[];
imagepath:string="assets/img/"
url:string="localhost:8001/test/getall";



constructor(private imageService:ImageproviderService,private http:HttpClient){}
ngOnInit() {
  this.fetchImages();
}
getUrl():Observable<any>{
  return this.http.get<any>(this.url);
}
fetchImages() {
  this.imageService.getUrl().subscribe(
    {
      next:(res)=>{
        this.imageContainer=res,
        console.log(res,this.imageContainer)
      },
      error:(err)=>{throw err}
    }
  );
}
}
