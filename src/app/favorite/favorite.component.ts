import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  inputs: ['isFavorite'],
  encapsulation: ViewEncapsulation.Emulated
  ]
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;

  @Output('change') click =  new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected}); // object is called between the {}
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
