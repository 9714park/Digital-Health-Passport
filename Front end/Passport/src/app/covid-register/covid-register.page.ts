import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-covid-register',
  templateUrl: './covid-register.page.html',
  styleUrls: ['./covid-register.page.scss'],
})
export class CovidRegisterPage implements OnInit {

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
