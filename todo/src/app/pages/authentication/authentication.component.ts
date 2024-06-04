import { Component } from '@angular/core';
import { LogoComponent } from '../../share/logo/logo.component';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

}
