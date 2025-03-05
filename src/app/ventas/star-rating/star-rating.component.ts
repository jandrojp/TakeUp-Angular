import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() rating: number = 0;

  get fullStars(): number[] {
    return Array(Math.floor(this.rating)).fill(0);
  }

  get hasHalfStar(): boolean {
    const decimalPart = this.rating % 1;
    return decimalPart >= 0.1 && decimalPart <= 0.8;
  }

  get emptyStars(): number[] {
    const totalStars = 5;
    const fullStarsCount = Math.floor(this.rating);
    const halfStarCount = this.hasHalfStar ? 1 : 0;
    return Array(totalStars - fullStarsCount - halfStarCount).fill(0);
  }

  get ratingColor(): string {
    if (this.rating < 3) {
      return 'red';
    } else if (this.rating >= 3 && this.rating < 4) {
      return 'orange';
    } else {
      return 'gold';
    }
  }
}
