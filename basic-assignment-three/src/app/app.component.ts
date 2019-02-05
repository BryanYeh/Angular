import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-assignment-three';

  btnSwitch = true;
  logs = [];

  btnSwitcher(){
    this.btnSwitch = !this.btnSwitch;
    this.logs.push(this.logs.length+1);
  }
}
