import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-id-upload',
  templateUrl: './id-upload.page.html',
  styleUrls: ['./id-upload.page.scss'],
})
export class IdUploadPage implements OnInit {
  currentImage: any;
  constructor(public photoService: PhotoService, public alertController: AlertController, private router: Router) { }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Congratulations!',
      subHeader: 'Your picture has been validated',
      message: 'Please login to see instructions on how to verify your account',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/login'])
        }
      }]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
