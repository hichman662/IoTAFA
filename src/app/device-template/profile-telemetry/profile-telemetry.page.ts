import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-profile-telemetry',
  templateUrl: './profile-telemetry.page.html',
  styleUrls: ['./profile-telemetry.page.scss'],
})
export class ProfileTelemetryPage implements OnInit {

  constructor(
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
  }

}
