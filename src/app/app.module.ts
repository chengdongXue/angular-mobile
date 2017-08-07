import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdListModule, MdProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer/beer-list.component';
import { BeerService } from './shared/beer/beer.service';
import { GiphyService } from './shared/giphy/giphy.service';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
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
    MdProgressBarModule
  ],
  providers: [
    BeerService, GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
