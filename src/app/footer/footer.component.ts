import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true
})

export class FooterComponent {
  year : number = new Date().getFullYear();
  name : String = 'Prud\'homme';
  firstname : String  = 'Kévin';
  email : String = 'kevin.prudhomme555@gmail.com';
}