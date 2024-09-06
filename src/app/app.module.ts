import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule for reactive forms
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule for HTTP requests
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule for routing

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';

// Define routes for the application
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tour-packages', component: TourPackagesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home for unknown routes
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourPackagesComponent,
    BookingComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  // Import ReactiveFormsModule for reactive forms
    HttpClientModule,     // Import HttpClientModule for HTTP requests
    RouterModule.forRoot(appRoutes)  // Configure routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
