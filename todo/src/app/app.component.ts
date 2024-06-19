import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { register } from 'node:module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AccountComponent } from './pages/account/account.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,RegistrationComponent,AuthenticationComponent,DashboardComponent, AccountComponent],
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
