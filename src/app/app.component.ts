import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `
  <h1>
     Hello there {{name}}!!!!!
  </h1>
  <hr>
   <item-list></item-list>
 `,

  styles: [`
  h1 {
     color: red; 
  }`]
})
export class AppComponent  { 
  name = 'Angular'; 
}
