import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './secure/home/home.component';
import { AboutComponent } from './secure/about/about.component';
import { ContactComponent } from './secure/contact/contact.component';
import { PhotosComponent } from './secure/photos/photos.component';
import { PricingComponent } from './secure/pricing/pricing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'heroes', component: HomeComponent },
  { path: 'over', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fotos', component: PhotosComponent },
  { path: 'prijzen', component: PricingComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
