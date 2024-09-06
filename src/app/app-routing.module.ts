import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';

// Define routes for each component
const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (home page)
  { path: 'tour-packages', component: TourPackagesComponent }, // Tour packages page
  { path: 'booking', component: BookingComponent }, // Booking page
  { path: 'gallery', component: GalleryComponent }, // Gallery page
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot for root-level routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
