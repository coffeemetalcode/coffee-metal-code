import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _skillsUrl = 'http://localhost:8085/skills';

  constructor(private _http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this._http.get<Skill[]>(this._skillsUrl)
      .pipe(
        tap(skills => {
          console.log('service skills', skills);
        })
      );
  }
}
