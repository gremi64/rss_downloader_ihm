import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent, SearchService } from './api/api.component';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpModule 
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
