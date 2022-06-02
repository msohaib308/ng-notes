import { SecurityService } from './../core/security.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email!: string;
  toastnfo!: string;

  constructor(private security: SecurityService, private router: Router,) { }

  ngOnInit(): void {
  }

  Login() {
    const user = this.security.Login(this.email);
    if (user) {
      this.router.navigateByUrl('/notes');
      this.toastnfo = 'Logged successfully'
    } else {
      this.toastnfo = 'No User Found'
    }
  }

}
