import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
<!--  NAV BAR AND PROFILE  -->
    <header>
    <ul>
  <li><a href="#home">DASHBOARD APP</a></li>
  <li style="float:right"><a class="navbar-brand" href="#">
         <img src="logo.png" alt="profile">
        </a></li>
</ul>
    </header>

    <!-- search input option  -->


    <div class="search-head" style="padding-left: 40%;padding-right: 40%; margin: 1cm;">
        <form class="search-bar" action="">
            <input class="" type="text" placeholder="Search Here"/> 
            <button type="submit">Search</button>             
      </form>
     </div>

      <!-- floating divs  -->


     <div class="container">
  <div class="div12">
    <div><h3>TOTAL USERS</h3></div>
    <div><h1>$15826</h1></div>
    <div><p>some text here</p></div>
    
  </div>
  <div class="div13">
  <div><h3>TASK per DAY </h3></div>
    <div><h1 >$15826</h1></div>
    <div><p>some text here</p></div>
  </div>  
  <div class="div14">
  <div><h3>TASK per MONTH</h3></div>
    <div><h1>$15826</h1></div>
    <div><p>some text here</p></div>
  </div>
</div>
   
  `,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
