import { ButtonComponentModule } from './../button/button.component';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aa-button-twitter',
  templateUrl: './button-twitter.component.html',
  styleUrls: ['./button-twitter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTwitterComponent {}

@NgModule({
  imports: [CommonModule, ButtonComponentModule],
  declarations: [ButtonTwitterComponent],
  exports: [ButtonTwitterComponent],
})
export class ButtonTwitterComponentModule {}
