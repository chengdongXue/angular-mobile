import { Component, OnInit } from '@angular/core';
import { NgServiceWorker } from '@angular/service-worker';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent implements OnInit {

  constructor(public sw: NgServiceWorker) {
  }

  ngOnInit() {
    this.sw
      .registerForPush({
        applicationServerKey: 'H7nef93Mds'
      })
      .subscribe(subscriptionObject => {
        // Send subscription data to the server
      });

    this.sw.push.subscribe(notificationPayload => {
      // Process notification data
    });
  }

}
