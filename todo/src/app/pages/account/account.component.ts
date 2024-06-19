import { Component } from '@angular/core';
import { LogoComponent } from '../../share/logo/logo.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ LogoComponent],
  template: `
   <div id="container">
   

   <div class="holder" >
     
     <app-logo></app-logo>
     <div class="acc">
        
            <div class="card" style="width: 18rem;" id="acc12">
          <img class="card-img-top"  src="../../assets/pictures/happy.jpg" alt="Card image">
          <div class="card-body">
            <p class="card-text">Husband</p>
          </div>
        </div>



        <div class="card" style="width: 18rem;" id="acc12">
           <img class="card-img-top"  src="../../assets/pictures/happy.jpg" alt="Card image"> 
          <div class="card-body">
            <p class="card-text">Programmer</p>
          </div>
        </div>

      </div>   
    </div> 
     </div> 
    
 
  `,
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
