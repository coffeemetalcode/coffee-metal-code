import { Component, OnInit } from '@angular/core';

import { SkillsService } from './skills.service';
import { Skill } from './skill';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills-wrapper',
  templateUrl: './skills-wrapper.component.html',
  styleUrls: ['./skills-wrapper.component.scss']
})
export class SkillsWrapperComponent implements OnInit {
  private _skillsSub: Subscription;
  skills: Skill[] = []

  constructor(public skillsService: SkillsService) { }

  ngOnInit(): void {
    this._skillsSub = this.skillsService.getSkills()
      .subscribe((skills: Skill[]) => {
        console.log('component skills', skills);
        this.skills = skills;
      });
  }

}
