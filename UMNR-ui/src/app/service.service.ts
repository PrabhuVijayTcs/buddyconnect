import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http: HttpClient) { }
  getData(url){
    return this.http.get(url,httpOptions);
  }
}
