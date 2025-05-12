import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {id: '1', name: 'Rohan', isActive: true},
    {id: '2', name: 'Ryan', isActive: true},
    {id: '3', name: 'Ron', isActive: true},
  ]
}
