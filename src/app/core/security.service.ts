import { UserDto } from './../Models/security.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  Login(email: string): UserDto | null {
    const user = this.GetAllUsers().find(x => x.email.toLowerCase() === email.toLowerCase());
    if (user) {
      localStorage.setItem('currentUser', email);
    }
    return user || null;
  }
  Register(user: UserDto) {
    const cUsers = this.GetAllUsers();
    const newList = [user, ...cUsers];
    localStorage.setItem('userList', JSON.stringify(newList));
  }
  GetAllUsers(): UserDto[] {
    const users = localStorage.getItem('userList') || '';
    return users ? JSON.parse(users) : [];
  }
}
