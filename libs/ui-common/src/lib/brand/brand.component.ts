import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H1ComponentModule } from '../h1/h1.component';

@Component({
  selector: 'aa-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent {
}

@NgModule({
  imports: [CommonModule, H1ComponentModule],
  declarations: [BrandComponent],
  exports: [BrandComponent],
})
export class BrandComponentModule {}
