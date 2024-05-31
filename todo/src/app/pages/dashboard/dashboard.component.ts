import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
    <ul>
  <li><a href="#home">DASHBOARD APP</a></li>
  <li style="float:right"><a class="navbar-brand" href="#">
         <img src="logo.png" alt="profile">
        </a></li>
</ul>
    </header>
    <div class="search-head" style="padding-left: 40%;padding-right: 40%; margin: 1cm;">
        <form class="search-bar" action="">
            <input class="search-barinpt" type="text" placeholder="Search Here"/> 
            <button type="submit">Search</button>             
      </form>
     </div>
   
  `,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
