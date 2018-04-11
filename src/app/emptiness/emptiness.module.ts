import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptinessComponent } from './emptiness.component';
import { EmptinessRoutingModule } from './emptiness-routing.module';

@NgModule({
  declarations: [ EmptinessComponent ],
  imports: [
    CommonModule,
    EmptinessRoutingModule
  ]
})
export class EmptinessModule { }
