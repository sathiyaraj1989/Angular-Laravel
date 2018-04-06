import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  authUrl: string = 'http://localhost/sathiyaraj/laravel/angular-laravel-services/public/oauth/token/';

  loggedIn: boolean = true;
  
  constructor(private http : Http) {
    this.loggedIn = !!localStorage.getItem('access_token');
   }

   isLoggedin() {
     return this.loggedIn;
   }

   loginSubmit(Username: string, Password: string): Observable<any> {
     let headers = new Headers( { 'Content-type' : 'application/json'});
     let options = new RequestOptions({ headers: headers});

     return this.http.post(this.authUrl + 'oauth/token/', JSON.stringify({'username' : Username, 'password': Password}), options)
     .map(res => res.json())
     .do(res => {
       if(res.Status == 'Success') {
         localStorage.setItem('access_token', res.access_token);
         
       }
     });
     //.catch(this.handleError);
   }

   logout() {
     localStorage.removeItem('access_token');
     this.loggedIn = false;
   }

}
