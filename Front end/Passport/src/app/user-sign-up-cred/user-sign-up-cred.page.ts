import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sign-up-cred',
  templateUrl: './user-sign-up-cred.page.html',
  styleUrls: ['./user-sign-up-cred.page.scss'],
})
export class UserSignUpCredPage implements OnInit {

  showPassword = false;
  passwordToggleIcon= 'eye';
  constructor() { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == "eye"){
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }
  ngOnInit() {
  }

}
