import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  

  ngOnInit() {
  }
  form: FormGroup = new FormGroup({});
  user: any;
  constructor(private _socioAuthServ: AuthService ) { }

  singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
      }
    );
    // this.router.navigateByUrl('/add-task');
  }

  
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

}
