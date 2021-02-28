import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from './store';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: Observable<any>;

  constructor(private store: Store) {
    this.store.set('todos', [{ id: 1, name: 'Mumtaz' }, { id: 2, name: 'Saba' }]);
    this.title = this.store.select('todos')
  }
}

