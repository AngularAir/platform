import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[aa-label]',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
}

@NgModule({
  imports: [CommonModule],
  declarations: [LabelComponent],
  exports: [LabelComponent],
})
export class LabelComponentModule {}
