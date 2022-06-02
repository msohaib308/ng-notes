import { SecurityService } from './../core/security.service';
import { UserDto } from './../Models/security.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userObj = new UserDto();
  toastnfo: any;
  constructor(private security: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }
  Register() {
    this.security.Register(this.userObj);
    const user = this.security.Login(this.userObj.email);
    this.router.navigateByUrl('/notes')
    this.toastnfo = 'Registered successfully'
  }

}
