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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TableSortingComponent
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
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
