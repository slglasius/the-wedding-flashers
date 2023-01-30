import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './secure/about/about.component';
import { PhotosComponent } from './secure/photos/photos.component';
import { PricingComponent } from './secure/pricing/pricing.component';
import { ContactComponent } from './secure/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './secure/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    PhotosComponent,
    PricingComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
