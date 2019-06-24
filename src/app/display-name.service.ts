import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayNameService {
  username: string;
  public  ShowUserName(): string {

      //it pick the user value of username  from local storage
    if (localStorage.users != null || localStorage.users !== undefined) {
      const users = JSON.parse(localStorage.getItem('users'));

      this.username = users[0].firstName;

    } else {
      this.username = 'Guest';
    }
    return this.username;
  }
}
