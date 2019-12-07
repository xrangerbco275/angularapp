import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'jcruz'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleLogin() {

    console.log(this.username);

    if (this.username == "jcruz" && this.password == 'password') {
      //redirect to welcomepage
    this.router.navigate(['welcome'])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
