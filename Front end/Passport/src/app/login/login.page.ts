import { Component, OnInit, ContentChild} from '@angular/core';
import { IonInput } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passwordToggleIcon= 'eye';
  @ContentChild(IonInput) input: IonInput;
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
