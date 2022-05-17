import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  validateCredentials(username:string,password:string):Boolean
  {
    if(username == 'Admin' && password == 'Admin@123')
    {
      sessionStorage.setItem('login','true');
      return true;
    }
    return false;
  }
  getMoviesfromAsset():Observable<any>
  {
    return this.http.get("../../assets/json/movies.json");
  }
}
