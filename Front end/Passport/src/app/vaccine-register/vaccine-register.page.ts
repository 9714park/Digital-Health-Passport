import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vaccine-register',
  templateUrl: './vaccine-register.page.html',
  styleUrls: ['./vaccine-register.page.scss'],
})
export class VaccineRegisterPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Error',
      subHeader: '',
      message: 'The registration number you have provided does not match the profile.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
