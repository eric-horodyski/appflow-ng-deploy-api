import { Component, OnInit } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  async ngOnInit() {
    await this.performAutomaticUpdate();
  }

  async performAutomaticUpdate() {
    try {
      const currentVersion = await Deploy.getCurrentVersion();
      const resp = await Deploy.sync({ updateMethod: 'auto' }, (percentDone) =>
        console.log(`Update is ${percentDone}% done!`)
      );
      if (!currentVersion || currentVersion.versionId !== resp.versionId) {
        alert('We updated the app for you!');
      } else {
        alert('No update available');
      }
    } catch (error) {
      alert(`Error ${error}`);
    }
  }
}
