import { EpisodeService } from '@ngair/scheduler/services-common';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SignUpPageCanActivateService implements CanActivate {
  constructor(
    private readonly episodeService: EpisodeService,
    private readonly router: Router
  ) {}

  infoRoute = '/episode-request';

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> {
    const episodeId = activatedRouteSnapshot.paramMap.get('eid');
    if (!episodeId) {
      return of(this.router.createUrlTree([this.infoRoute]));
    }
    return this.episodeService
      .canSignUpForEpisode(episodeId)
      .pipe(
        map(
          (accessAllowed) =>
            accessAllowed || this.router.createUrlTree([this.infoRoute])
        )
      );
  }
}
