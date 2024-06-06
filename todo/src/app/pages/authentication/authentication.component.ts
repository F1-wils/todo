import { Component } from '@angular/core';
import { LogoComponent } from '../../share/logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [LogoComponent, RouterLink],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

}
