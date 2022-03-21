import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Social {
  social: string;
}

@Component({
  selector: 'aa-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
})
export class SocialLinksComponent {
}

@NgModule({
  imports: [CommonModule],
  declarations: [SocialLinksComponent],
  exports: [SocialLinksComponent],
})
export class SocialLinksComponentModule {}
