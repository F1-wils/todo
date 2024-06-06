import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  template: `
    <section>
    <header class="brand-name">
      <div style="  width:300px;
 ; margin-left: 1%;">
      <a href="url" style="color: black; font-size:1.2cm;font-weight: 450; text-decoration: none;">TO-DO</a>
 
      </div>
     </header>
   </section>
  `,
  styleUrl: './logo.component.css'
})
export class LogoComponent {

}
