import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  credentials = { Username: '', Password: '' };
  warningMessage: boolean = false;
  errorMessage: boolean = false;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  loginSubmit() {
    
    if(this.credentials.Username == '' || this.credentials.Password == '') {      
      this.warningMessage = true;
      setTimeout(() => { this.warningMessage = false }, 4000); 
    } else {
      alert(1);
      this.loading = true;
      this.service.loginSubmit(this.credentials.Username, this.credentials.Password)
      .subscribe(
        data => {
          if(data.Status == 'Success') {
            this.service.loggedIn = true;
            this.router.navigate(['dashboard']);
          } else {
            this.errorMessage = true;
            setTimeout(() => { this.errorMessage = false }, 4000);
          }
          this.loading = false;
        }
      )
      
    }
  }

}
