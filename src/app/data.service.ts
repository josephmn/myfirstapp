import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from "./Post";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // modulo dento de la clase (privada)
  constructor(private http: HttpClient) {
    console.log('service is working!');
  }

  // obtener data post desde interface Post.ts
  getData() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
