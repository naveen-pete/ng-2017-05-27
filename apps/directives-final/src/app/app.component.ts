import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedOption = 'all';

  showNumber(n) {
    if(this.selectedOption === 'all')
      return true;

    if(n % 2 === 0 && this.selectedOption === 'even')
      return true;

    if(n % 2 !== 0 && this.selectedOption === 'odd')
      return true;

  }
}
