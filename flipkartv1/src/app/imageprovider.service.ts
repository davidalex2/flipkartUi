import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageproviderService {
  url:string="localhost:8001/test/getall";

  constructor(private http:HttpClient) { }
  getUrl():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
