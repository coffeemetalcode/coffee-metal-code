import { Component, Input, OnInit } from '@angular/core';

import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  // @Input() skill: Skill;
  percent = 90;

  constructor() { }

  ngOnInit(): void {
  }

}
