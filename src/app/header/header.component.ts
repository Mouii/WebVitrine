import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterModule], // ✅ Needed for `routerLink`
  standalone: true
})
export class HeaderComponent {

  
  name = 'John Doe';
  tagline = 'Web Developer | Creative Thinker';

  home = "Accueil";
  about = "Parcours";
  portfolio = "Projets";
  contact = "Contact";

}