import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '1';

  constructor(){
    this.name = "Ted"
  }
  changeName(name:string):void {
  this.name = name;
}
}