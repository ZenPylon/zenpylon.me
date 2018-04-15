import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';


@Component({
  templateUrl: 'playground.component.html',
  styleUrls: ['playground.component.css']
})
export class PlaygroundComponent {
  options: GridsterConfig;
  dashboard: GridsterItem[];

  constructor(private sanitizer: DomSanitizer) {
    this.options = {
      displayGrid: 'always',
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };
    this.dashboard = [
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        backgroundImage: this.sanitizer.bypassSecurityTrustStyle(
          `url('../../assets/polynomial-sphere.png')`
        ),
        heading: 'Polynomial Color Sphere'
      },
      { cols: 2, rows: 2, y: 0, x: 2, heading: 'Coming soon!' }
    ];
  }

}
