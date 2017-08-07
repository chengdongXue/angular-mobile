import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdListModule, MdProgressBarModule } from '@angular/material';
import { AppShellModule } from '@angular/app-shell';
import { ServiceWorkerModule } from '@angular/service-worker'

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer/beer-list.component';
import { BeerService } from './shared/beer/beer.service';
import { GiphyService } from './shared/giphy/giphy.service';
import { PushComponent } from './push/push.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    PushComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdListModule,
    MdProgressBarModule,
    AppShellModule.runtime(),
    ServiceWorkerModule
  ],
  providers: [
    BeerService, GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
