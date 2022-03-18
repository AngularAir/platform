import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AAStackComponentModule } from '../aa-stack/aa-stack.component';

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
  imports: [CommonModule, AAStackComponentModule],
  declarations: [EpisodeDetailsComponent],
  exports: [EpisodeDetailsComponent],
})
export class EpisodeDetailsComponentModule {}
