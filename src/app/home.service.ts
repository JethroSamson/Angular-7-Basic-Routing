import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  API_URL = '/api/';
  constructor(private http: HttpClient) { }
  getHome(){
    return this.http.get(this.API_URL + 'posts')
  }
  getPost(postId){
    return this.http.get(`${this.API_URL + 'posts'}/${postId}`)
  }
  getComment(postId){
    return this.http.get(this.API_URL + 'comments')
  }
  getProfiles(){
    return this.http.get(this.API_URL + 'users')
  }
  getProfile(acctId){
    return this.http.get(`${this.API_URL + 'users'}/${acctId}`)
  }
  getPostAll(){
    return this.http.get(this.API_URL + 'posts')
  }
}
