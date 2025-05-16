import { Component } from '@angular/core';

interface ImageSet {
  images: string[];
  activeIndex: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  standalone: true
})
export class PortfolioComponent {

  kotlinWerewolfProject : ImageSet = {
    images : ["assets/werewolf.webp"],
    activeIndex : 0
  }

  angularWerewolfProject : ImageSet = {
    images : ["assets/simplevillager.webp"],
    activeIndex : 0
  }

  hanoiProject : ImageSet = {
    images : ["assets/manipulator.webp"],
    activeIndex : 0
  }

  prevString : String = "⬅ Prev";
  nextString : String = "Next ➡"

  nextImage(actualImage: ImageSet) {
    actualImage.activeIndex = (actualImage.activeIndex + 1) % actualImage.images.length;
  }

  prevImage(actualImage: ImageSet) {
    actualImage.activeIndex = (actualImage.activeIndex - 1 + actualImage.images.length) % actualImage.images.length;
  }


}
