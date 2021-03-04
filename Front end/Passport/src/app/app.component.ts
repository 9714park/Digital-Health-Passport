import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  url: string;
  authenticated: boolean;
  urls = ["/home", "/passport", "/vaccine-history", "/vaccine-register", "/covid-test", "/covid-register"];

  constructor(private location: Location) {
    location.onUrlChange(e => {
      this.url = e;
      this.authenticated = this.urls.includes(this.url) ? true : false;
    });
  }
}