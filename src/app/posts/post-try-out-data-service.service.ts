import { Injectable } from '@angular/core';
import {DataService} from './data-service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostTryOutDataServiceService extends  DataService{

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http );
  }
}
