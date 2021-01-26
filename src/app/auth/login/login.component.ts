import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/_model/person';
import { User } from 'src/app/_model/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  person: Person = { email: '', password: '' };

  // user: User = {};

  // password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.person).subscribe(
      (response) => {
        localStorage.setItem('token', response['token']);
        console.log(response);
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
}
