import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SkillsService } from './skills.service';
import { Skill } from './skill';
import { Subscription } from 'rxjs';

declare const Waypoint: any;

@Component({
  selector: 'app-skills-wrapper',
  templateUrl: './skills-wrapper.component.html',
  styleUrls: ['./skills-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsWrapperComponent implements OnInit {
  private _skillsSub: Subscription;
  skills: Skill[] = []

  constructor(
    public skillsService: SkillsService,) { }

  ngOnInit(): void {
    this._skillsSub = this.skillsService.getSkills()
      .subscribe((skills: Skill[]) => {
        console.log('component skills', skills);
        this.skills = skills;
      });
      
    // Skills Bar

    // const skillbar = new Waypoint({
    //   element: document.getElementsByClassName('.skill'),
    //   handler: () => {
    //     alert('Skillz!');
    //   }
    // });

    (<any>$('.skill')).waypoint(function() {
      $('.skill').each(function() {
          var $this = $(this),
              $progressBar = $this.find('.progress-bar'),
              $value = $progressBar.data('value');
              $progressBar.animate({
                width: $value,
              }, 'fast');
          console.log($value);
      });
    }, { offset: '75%' });
  }

  onWindowScroll(e: Event) {
    console.log(e);
  }
}
