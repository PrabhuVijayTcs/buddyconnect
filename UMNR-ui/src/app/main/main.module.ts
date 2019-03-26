import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';


import { CommonModule } from '@angular/common';
import { BookerComponent } from './booker/booker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { InFlightEntertainmentComponent } from './in-flight-entertainment/in-flight-entertainment.component';
import { MainRoutingModule } from './main-routing.module';
import { ProfileComponent } from '../profile/profile.component';


@NgModule({
  declarations: [
    BookerComponent,
    DashboardComponent,
    BookingComponent,
    TrackerComponent,
    ReviewsComponent,
    InFlightEntertainmentComponent,
    LandingComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,           // <----- this module will be deprecated in the future version.
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional),
    MatSelectModule,
    MatInputModule
  ]
})
export class MainModule { }