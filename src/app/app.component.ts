import { Component } from '@angular/core';

import { NgServiceWorker } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public sw: NgServiceWorker) {
  }
}
