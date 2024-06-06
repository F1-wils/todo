import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive ,DashboardComponent,AuthenticationComponent],
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
