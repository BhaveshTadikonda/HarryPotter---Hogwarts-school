
//import
import { Component } from '@angular/core';


// Metadata 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//class
export class AppComponent {
  Pagetitle: String = 'potter-api';
  className: string = null;
  display = false;
  element: HTMLElement;

  public changeColor(event: any) {
    console.log(event.srcElement);
    event.srcElement.className = 'active';
    this.className = 'active';
  }
  public myFunction() {
    this.element = document.getElementById('myTopnav') as HTMLElement;
    if (this.element.className === 'topnav') {
      this.display = true;
    } else {
      this.display = false;
    }
  }
}
