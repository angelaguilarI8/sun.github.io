import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" ,
Authorization: 'Bearer ' + localStorage.getItem('SCtoken') }) };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl + '/sun/auth';
  headers : HttpHeaders = new HttpHeaders({
    "Conten-type": "application.json"
  })

  constructor( private http: HttpClient  ) {}

onlogin(data){
      return this.http.post(this.url + '/login', data, {headers : this.headers} )
      .pipe(map(data => data))
}

getRefreshToken(){
    let token = localStorage.getItem('refreshToken');
    return token
}

setRefreshToken(refreshToken): void{
    localStorage.setItem('refreshToken',refreshToken);
}

refreshToken(){
      return this.http.post<any>(
        this.url + '/refreshToken',
        { 'refreshToken': this.getRefreshToken() }
      ).pipe(tap((tokens) => {
        let reToken = tokens.refreshtoken;
        this.setRefreshToken(reToken);
      }));
}

logout(){
      localStorage.removeItem('SCtoken');
  }

setToken(token): void{
      localStorage.setItem('SCtoken', token);
}
getToken(){
      return localStorage.getItem('SCtoken');
}

}

