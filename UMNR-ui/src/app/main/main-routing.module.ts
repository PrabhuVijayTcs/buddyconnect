import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { InFlightEntertainmentComponent } from './in-flight-entertainment/in-flight-entertainment.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main.component';
import { BookerComponent } from './booker/booker.component';
import { ProfileComponent } from '../profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { PnrConfirmationComponent } from './pnr-confirmation/pnr-confirmation.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    { path: '', component: BookerComponent},
    { path: 'booking', component: BookerComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'tracker', component: TrackerComponent},
    { path: 'review', component: ReviewsComponent},
    { path: 'IFE', component: InFlightEntertainmentComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'payment', component: PaymentComponent},
    { path: 'pnrconfirm', component: PnrConfirmationComponent},
    { path: 'itineraryDetails', component: ItineraryDetailsComponent}
  ]
}
];

export const MainRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes,
);
