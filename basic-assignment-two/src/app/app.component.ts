import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canReset = false;
  username = "";
  defaultProfile = "default-profile";

  title = 'basic-assignment-two';

  onReset(){
    this.username = "";
    this.canReset = false;
    this.defaultProfile = "default-profile";
  }

  onUpdateUsername(event)
  {
    this.username = event.target.value.trim();
    this.canReset = this.username != "";
    this.defaultProfile = this.username != "" ? this.slugify(this.username) : "default-profile" ;
  }

  slugify(text: string){
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/&/g, '-and-')         // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -    
  }

}
