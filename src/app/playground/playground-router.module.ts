import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaygroundComponent } from './playground.component';
import { PolynomialSphereComponent } from './polynomial-sphere/polynomial-sphere.component';

const playgroundRoutes: Routes = [
  { path: 'playground', component: PlaygroundComponent },
  { path: 'playground/polynomial-sphere', component: PolynomialSphereComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(playgroundRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class PlaygroundRoutingModule {}
