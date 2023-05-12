import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
  }
    getPostData(){
      let url='https://example.com/api/contact';
      return this.http.get(url);
    
   }
}
