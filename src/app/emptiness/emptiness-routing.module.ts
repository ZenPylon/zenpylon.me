import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptinessComponent } from './emptiness.component';

const emptinessRoutes: Routes = [
  { path: '**', component: EmptinessComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(emptinessRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmptinessRoutingModule { }
