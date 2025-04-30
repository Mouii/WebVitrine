import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true
})

export class FooterComponent {
  year = new Date().getFullYear();
  name = 'John Doe';
  email = 'john.doe@example.com';
}