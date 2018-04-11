import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaygroundComponent } from './playground.component';

const playgroundRoutes: Routes = [
  { path: 'playground', component: PlaygroundComponent },
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
