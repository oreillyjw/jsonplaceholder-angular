import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import User from './user';

@Injectable()
export class UserService {
  private _url = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) { }

  getUsers(){
    return this._http.get(this._url)
              .map(res => res.json())
              .toPromise();
  }

  addUser(user: User ){
    return this._http.post(this._url, JSON.stringify(user))
               .map(res => res.json() )
               .toPromise();
  }

  getUserUrl(id){
    return this._url + "/" + id;
  }

  getUser(id){
    return this._http.get(this.getUserUrl(id))
                .map(res => res.json() );
  }

  updateUser(user: User){
    return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(res => res.json())
            .toPromise();
  }

  deleteUser(userId){
    return this._http.delete(this.getUserUrl(userId))
            .map(res => res.json())
            .toPromise();
  }
}
