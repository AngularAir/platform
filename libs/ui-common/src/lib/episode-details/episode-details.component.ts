import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponentModule } from '../stack/stack.component';
import { ButtonComponentModule } from '../button/button.component';

@Component({
  selector: 'ngair-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss'],
})
export class EpisodeDetailsComponent {
}

@NgModule({
  imports: [CommonModule, StackComponentModule, ButtonComponentModule],
  declarations: [EpisodeDetailsComponent],
  exports: [EpisodeDetailsComponent],
})
export class EpisodeDetailsComponentModule {}
