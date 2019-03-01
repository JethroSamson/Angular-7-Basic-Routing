import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MypageService {
  API_URL = '/api/';
  constructor(private http: HttpClient) { }
  getMypage(){
    return this.http.get(this.API_URL + 'posts')
  }
}
