import { Component } from '@angular/core';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  templateUrl: 'playground.component.html',
  styleUrls: ['playground.component.css']
})
export class PlaygroundComponent {
  options: GridsterConfig;
  dashboard: GridsterItem[];

  constructor() {
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
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
  }

}
