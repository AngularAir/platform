import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[aa-h]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./h1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class H1Component {
}

@NgModule({
  imports: [CommonModule],
  declarations: [H1Component],
  exports: [H1Component],
})
export class H1ComponentModule {}
