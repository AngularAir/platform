import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { EpisodeFormComponentModule } from '@ngair/ui-common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: SignUpPageComponent}
    ]),
    EpisodeFormComponentModule
  ],
  declarations: [SignUpPageComponent]
})
export class SchedulerFeatureEpisodeRequestModule {}
