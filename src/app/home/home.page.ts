import { Component, OnInit } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  async ngOnInit() {
    const info = await Deploy.getCurrentVersion();
    console.log('Current Version', info);
    const update = await Deploy.checkForUpdate();
    console.log('Is an update available?', update);
  }
}
