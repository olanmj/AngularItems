import {Component} from '@angular/core';

@Component({
   selector: 'app-item',
   templateUrl: './item.component.html',
   styleUrls: ['./item.component.css']
})

export class ItemComponent {
//   name = "Widget";
//   price = 10.50;

show = true;

 constructor(public name: string, 
            public price: number,
            public imageUrl: string = null) {

 }

 toggleImage() {
     this.show = !this.show;
 }
}