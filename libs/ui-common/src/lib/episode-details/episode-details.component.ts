import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AAStackComponentModule } from '../aa-stack/aa-stack.component';
import { AaButtonComponentModule } from '../aa-button/aa-button.component';

@Component({
  selector: 'ngair-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss'],
})
export class EpisodeDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, AAStackComponentModule, AaButtonComponentModule],
  declarations: [EpisodeDetailsComponent],
  exports: [EpisodeDetailsComponent],
})
export class EpisodeDetailsComponentModule {}
