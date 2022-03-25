import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@ngair/scheduler/feature-home').then(
              m =>m.SchedulerFeatureHomeModule
            )
        },
        {
          path: 'episode-request',
          loadChildren: () =>
            import('@ngair/scheduler/feature-episode-request').then(
              (m) => m.SchedulerFeatureEpisodeRequestModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
