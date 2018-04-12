import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { RootData } from '@angular/core/src/view';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {  

  constructor(private service: AuthService, private router: Router) {}
  
  get isLoggedIn() {
    return this.service.isLoggedIn();
  }
  
  ngOnInit() {
    let keep: boolean = true;
    if(this.isLoggedIn == true) {
      
      this.router.events.subscribe((event) => { 
        if (event instanceof NavigationEnd ) {
          if(event.url == '/forgetpassword' || event.url.indexOf('/resetpassword') >= 0) {
            if(keep){
              this.service.logout();
              this.router.navigate(['' + event.url + '']);
              keep = false;
            }
          } else {
            if(keep){
            this.router.navigate(['/dashboard']);
            keep = false;
            }   
          }
        }
      });
    }
    else {
      this.router.events.subscribe((event) => { 
        if (event instanceof NavigationEnd ) {
          if(event.url == '/forgetpassword' || event.url.indexOf('/resetpassword') >= 0) {
            if(keep){
              this.router.navigate(['' + event.url + '']);
              keep = false;
            }
          }
          else {
            if(keep){
            this.router.navigate(['/']);
            keep = false;
            }   
          }
        }
      });
    }
  }
}
