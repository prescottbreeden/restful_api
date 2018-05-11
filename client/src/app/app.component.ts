import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harry potter is the best';
  description = ['our first component!'];
  constructor(private _http: HttpService) {
    this._http.getTasks();
  }
}
