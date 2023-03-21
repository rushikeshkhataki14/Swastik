import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

import { FarmersComponent } from './farmers/farmers.component';
import { AdminComponent } from './admins/admin.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    AdminComponent,
    FarmersComponent,
    RecommendationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule


  ]
})
export class AdminModule { }
