import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  model: any = {};

  constructor(private router: Router) { }

  onSubmit() {


    if (localStorage.getItem('users') != null || localStorage.getItem('users') !== undefined) {
      localStorage.removeItem('users');
      localStorage.clear();

    }
    let users = JSON.stringify([]);
    var u = JSON.parse(users);
    var name = this.model.firstName;
    var email = this.model.email;

    u.push({ 'firstName': name }, { 'email': email });
    users = JSON.stringify(u);
    localStorage.setItem('users', users);
    // console.log(localStorage.getItem('users'));


    this.router.navigate(['/quiz']);
  }
}

