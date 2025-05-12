import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {id: '1', name: 'Rohan', isActive: true},
    {id: '2', name: 'Ryan', isActive: true},
    {id: '3', name: 'Ron', isActive: true},
  ];

  users$ = of(this.users);
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)))
}
