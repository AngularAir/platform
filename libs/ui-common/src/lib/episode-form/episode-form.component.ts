import {
  Component,
  NgModule,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StackComponentModule } from '../stack/stack.component';
import { ButtonComponentModule } from '../button/button.component';

export interface Episode {
  name: string;
  email: string;
  twitter: string;
  title: string;
}

@Component({
  selector: 'ngair-episode-form',
  templateUrl: './episode-form.component.html',
  styleUrls: ['./episode-form.component.css'],
})
export class EpisodeFormComponent {
  // episode: Episode = {
  //   name: '',
  //   email: '',
  //   twitter: '',
  //   title: '',
  // };

  @Input() name = '';
  @Input() email = '';
  @Input() twitter = '';
  @Input() title = '';

  @Output() formSubmit = new EventEmitter<Episode>();

  onSubmit(formValue: Episode) {
    console.log('submit the form event', formValue);
    this.formSubmit.emit(formValue);
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, StackComponentModule, ButtonComponentModule],
  declarations: [EpisodeFormComponent],
  exports: [EpisodeFormComponent],
})
export class EpisodeFormComponentModule {}
