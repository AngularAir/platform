import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input[aa-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
}

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputComponentModule {}
