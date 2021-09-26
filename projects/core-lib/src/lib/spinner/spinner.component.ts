import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="loading">
    <div class="spinner">
      <img src="../../assets/pizza-spinner.png" class="pizza-part pizza-part-1" />
      <img src="../../assets/pizza-spinner.png" class="pizza-part pizza-part-2" />
      <img src="../../assets/pizza-spinner.png" class="pizza-part pizza-part-3" />
      <img src="../../assets/pizza-spinner.png" class="pizza-part pizza-part-4" />
    </div>
  </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

}
