import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from './ipost';
import {catchError, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(message);
  }
  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this.url);
  }

  /** POST: add a new hero to the server */
  addPost(hero: IPost): Observable<IPost> {
    return this.http.post<IPost>(this.url, hero);
  }
  /** DELETE: delete the hero from the server */

  deletePost(hero: IPost | number): Observable<IPost> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<IPost>(url);
  }
  /** GET hero by id. Will 404 if id not found */
  getPostByID(id: number): Observable<IPost> {
    const url = `${this.url}/${id}`;
    return this.http.get<IPost>(url);
  }
  updatePost(hero: IPost): Observable<any> {
    return this.http.put(this.url, hero, this.httpOptions);
  }
}
