import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { InFlightEntertainmentComponent } from './in-flight-entertainment/in-flight-entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ProfileComponent,
    BookingComponent,
    TrackerComponent,
    ReviewsComponent,
    InFlightEntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
