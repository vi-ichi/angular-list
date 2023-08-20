import { Component } from '@angular/core';
import { GqlService } from './gql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: GqlService) {}

  title = 'list-app';
}
