import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})


export class ShareListService {
  modal = 'projects';

  constructor(private httpClient: HttpClient) { }

  getUrl(){
    return `${BASE_URL}${this.modal}`;
  }

  get(){
    return this.httpClient.get(this.getUrl());
  }
}
