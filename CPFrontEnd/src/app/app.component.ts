import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cpproject';
  menu:boolean=false;

 showMenu(){

  if (this.menu) {
    this.menu=false
  }else{this.menu=true
  }
 }
}
