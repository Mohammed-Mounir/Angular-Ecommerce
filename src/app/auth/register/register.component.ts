import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/_model/person';
import { User } from 'src/app/_model/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  person: Person = { email: '', password: '', repeatedPassword: '' };

  // password = '';
  // confirmPass = '';

  notSamePass = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  confirmPassword(pass, confirm) {
    if (pass.value === confirm.value) {
      this.notSamePass = false;
    } else {
      this.notSamePass = true;
    }
  }

  OnSubmit() {
    this.authService.register(this.person).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
}
