import { Component } from '@angular/core';
import { LogoComponent } from './share/logo/logo.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SettingsComponent } from './pages/settings/settings.component';



@Component({
  imports :[ LogoComponent,DashboardComponent,AuthenticationComponent,AccountComponent,HomeComponent,RegistrationComponent,
    SettingsComponent],
  selector: 'app-root',
  standalone: true,
  template: '<main> <app-dashboard></app-dashboard>   </main>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
