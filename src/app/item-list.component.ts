import {Component} from '@angular/core';
import {ItemComponent} from './item.component';

@Component({
   selector: 'item-list',
   templateUrl: './item-list.component.html'
  })

export class ItemListComponent {
  items :ItemComponent[] = [
    new ItemComponent('Widget 1', 25, 
    "https://openclipart.org/image/300px/svg_to_png/219896/antiFlash-icons-gear.png" ),
                            new ItemComponent('Widget 2', 19.99)];
  birthday = new Date(1999, 4, 12);
  sample = 'Placeholder text';

  count = 3;
  onSubmit() {
    this.items.push(new ItemComponent('Widget ' + this.count++, 100 + this.count*10));
  }
   
}