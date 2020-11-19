import { Injectable } from '@angular/core';
import {DataService} from './data-service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../posts/ipost';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor( http: HttpClient) {
    super('https://api.github.com/users/wimmelstein/followers', http);
  }


}
