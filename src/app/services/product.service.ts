import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8888/api/products';

const headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization', 'authkey');

const optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
};  
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL, optionRequete);
  }

  read(id): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`, optionRequete);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data, optionRequete);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data, optionRequete);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`, optionRequete);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL, optionRequete);
  }

  searchByName(name): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`, optionRequete);
  }
}
