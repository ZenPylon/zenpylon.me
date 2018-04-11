import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { EmptinessModule } from './emptiness/emptiness.module';
import { HomeModule } from './home/home.module';
import { PlaygroundModule } from './playground/playground.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AboutModule,
    HomeModule,
    PlaygroundModule,
    AppRoutingModule,
    EmptinessModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
