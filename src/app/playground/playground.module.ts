import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsterModule } from 'angular-gridster2';

import { PlaygroundComponent } from './playground.component';
import { PolynomialSphereComponent } from './polynomial-sphere/polynomial-sphere.component';
import { PlaygroundRoutingModule } from './playground-router.module';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    PlaygroundRoutingModule
  ],
  declarations: [
    PlaygroundComponent,
    PolynomialSphereComponent
  ]
})
export class PlaygroundModule {}
