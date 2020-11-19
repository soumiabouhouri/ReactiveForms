import {HttpClient} from '@angular/common/http';

export class DataService {
  constructor(private url: string, private http: HttpClient) {
  }
  GetAll(){
    return this.http.get(this.url);
  }
  Create(Body){
    return this.http.post(this.url, JSON.stringify(Body));
  }
  Update(Body){
    return this.http.put(this.url + '/' + Body.id, JSON.stringify(Body));
  }
  Delete(id){
    const url = this.url + '/' + id;
    return this.http.delete(url);
  }

}
