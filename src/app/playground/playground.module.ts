import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-router.module';

@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule
  ],
  declarations: [ PlaygroundComponent ]
})
export class PlaygroundModule {}
