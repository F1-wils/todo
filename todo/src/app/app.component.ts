import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';


@Component({
  imports :[ LogoComponent],
  selector: 'app-root',
  standalone: true,
  template: '<main> <app-logo></app-logo></main>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
