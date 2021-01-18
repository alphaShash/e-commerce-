import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular hello-world';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChnaged(isFavorite) {
    console.log('changes: ', isFavorite);
  }
}
