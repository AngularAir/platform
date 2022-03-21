import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[aa-stack]',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent {
}

@NgModule({
  imports: [CommonModule],
  declarations: [StackComponent],
  exports: [StackComponent],
})
export class StackComponentModule {}
