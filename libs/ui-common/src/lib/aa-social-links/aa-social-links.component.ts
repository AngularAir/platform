import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Social {
  social: string;
}

@Component({
  selector: 'ngair-aa-social-links',
  templateUrl: './aa-social-links.component.html',
  styleUrls: ['./aa-social-links.component.css'],
})
export class AASocialLinksComponent {
}

@NgModule({
  imports: [CommonModule],
  declarations: [AASocialLinksComponent],
  exports: [AASocialLinksComponent],
})
export class AASocialLinksComponentModule {}
