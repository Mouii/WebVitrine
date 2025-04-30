import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  standalone: true
})

export class BodyComponent {
  aboutText = 'Passionate developer with expertise in modern web technologies.';
  skills = ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node.js'];
  photos = [
    { url: 'assets/photo1.jpg', description: 'Project 1' },
    { url: 'assets/photo2.jpg', description: 'Project 2' }
  ];
}
