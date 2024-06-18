import { Component } from '@angular/core';
import { LogoComponent } from '../../share/logo/logo.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
