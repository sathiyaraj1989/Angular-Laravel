import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  loggedIn: boolean = true;
  
  constructor(private http : Http) {
    this.loggedIn = !!localStorage.getItem('access_token');
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  private oauthUrl = "http://localhost/sathiyaraj/laravel/angular-laravel-services/public/oauth/token";  

  loginSubmit(Username: string, Password: string): Observable<any> {
     
    var headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    }); 

    let postData = {
      grant_type: "password",
      client_id: 2,
      client_secret: "HqbNzgjbp2nTlGhPTCsra2VqUjCtfxfyhrPgWfU1",
      username: Username,
      password: Password,
      scope: ""
    }

    return this.http.post(this.oauthUrl, JSON.stringify(postData), {
      headers: headers
    })
    .map((res: Response) => res.json())
    .do(res => {      
      if (res.access_token) {        
        localStorage.setItem('access_token', res.access_token);
      }
    })
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout() {
    localStorage.removeItem('access_token');
    this.loggedIn = false;
  }

  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
