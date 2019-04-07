import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = {
  headers: new HttpHeaders({ 
    'key':'4f8ce657-ee06-4527-a8d8-4b207f8f0d62' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http: HttpClient) { }
  getData(url: string){
    return this.http.get(url,headers);
  }
}
