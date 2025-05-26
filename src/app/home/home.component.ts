import { Component } from '@angular/core';
import { bounceAnimation, fadeInUpAnimation } from '../app/AnimationService';
import { CommonModule } from '@angular/common';
import { animate, sequence, state, style, transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
        trigger('fadeInUp', [
            transition(':enter', useAnimation(fadeInUpAnimation))
        ])
    ]
})
export class HomeComponent {

  state = '';

  presentationString : String = `Mes salutations à toi cher visiteur/chère visitrice, et bienvenue sur mon site de présentation! <br/>
    Moi c'est Kévin Prud'homme, né le 2 Mars 1993, ingénieur développeur logiciel, dans les ordinateurs depuis l'âge de 6 ans! (ça fait beaucoup là non?)<br/>
    Comme beaucoup, j'ai été attiré dans le domaine de l'informatique et de la programmation/conception de logiciel par passion pour les jeux vidéos. j'éprouve beaucoup de plaisir à voir le plaisir apporté à d'autres par des créations que je pourrais avoir conçu.<br/>
    Une autre de mes motivations était le maniement de la technologie d'aujourd'hui, extrêmement présente dans notre quotidien, et de sentir que je pouvais passer "derrière l'écran". <br/>
    Si tu veux en savoir plus sur mon parcours, rends-toi la page "mon parcours". Si tu es curieux/curieuse de mes projets personnels faits, tu peux aller sur "mes projets"!`


}
