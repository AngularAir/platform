import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  constructor(private readonly http: HttpClient) {}

  getEpisode(episodeId: string): Observable<string> {
    return of('hi Justin - ' + episodeId);
  }

  canSignUpForEpisode(episodeId: string): Observable<boolean> {
    const validEpisodeIds = ['myshow'];
    return of(validEpisodeIds.includes(episodeId));
  }
}
