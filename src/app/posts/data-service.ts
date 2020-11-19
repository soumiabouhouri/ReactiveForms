import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from './ipost';
import {  map } from 'rxjs/operators';

export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(message);
  }
  GetAll(){
    return this.http.get(this.url)
      .map(response => response.json());
  }
  Create(Body){
    return this.http.post(this.url, JSON.stringify(Body));
  }
  Update(Body){
    return this.http.put(this.url + '' + Body.id, JSON.stringify(Body));
  }
  Delete(id){
    const url = this.url + '/' + id;
    return this.http.delete(url);
  }

}
