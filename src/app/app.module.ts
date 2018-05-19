import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent, SearchService } from './api/api.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatToolbarModule, MatSortModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms'; // <-- NgModel lives here

import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { TvShowEpisodeDownloaderComponent } from './tv-show-episode-downloader/tv-show-episode-downloader.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TableSortingComponent,
    TvShowEpisodeDownloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpModule,
    ReactiveFormsModule
    
    , CommonModule
    , MatToolbarModule
    , MatInputModule
    , MatTableModule
    , MatSortModule
    , BrowserAnimationsModule
    , MatListModule
    , MatProgressSpinnerModule
    , MatCardModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
