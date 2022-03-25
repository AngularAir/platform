import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { EpisodeFormComponentModule } from '@ngair/ui-common';
import { InfoPageComponent } from './info-page/info-page.component';
import { SignUpPageCanActivateService } from './sign-up-page/sign-up-page-can-activate.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'episode/:eid',
        pathMatch: 'full',
        canActivate: [SignUpPageCanActivateService],
        component: SignUpPageComponent,
      },
      { path: '', pathMatch: 'full', component: InfoPageComponent },
    ]),
    EpisodeFormComponentModule,
  ],
  declarations: [SignUpPageComponent, InfoPageComponent],
})
export class SchedulerFeatureEpisodeRequestModule {}
