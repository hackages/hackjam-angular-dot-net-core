import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'bs-login',
  template: `
    <form formGroup="f">
      <h2>Login To Browse our shop!</h2>
      <div>
        <label>Login: </label>
        <input name="login" [formControlName]="login" placeholder="your login...">
        <span ngIf="!form.value.login">Login is required...</span>
      </div>
      <br>
      <div>
        <label>Password: </label>
        <input name="password" [formControlName]="passwor" placeholder="your password...">
      </div>

      <br>
      <button onclick="login" disabled="form.invalid">Login</button>
    </form>
  `
})
export class LoginComponent {
  form = new FormControl({
    login: new FormControl('bouba', Validators.required),
    password: new FormControl('passwor', [
      Validators.required,
      Validators.minLength(4)
    ])
  });
  user: { login: 'davyengone'; password: 'password' };

  login() {
    // Navigate to Dashboard when password is higher than 4 characters..
    if (this.form.valid) {
      localStorage.setItem('userInfo', JSON.stringify(this.form.value));
    }
  }
}
