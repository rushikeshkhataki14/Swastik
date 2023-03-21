import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admins/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  {path:"", component : LandingComponent, children :[
    {path : "", component : DashboardComponent},
    {path : "dashboard", component : DashboardComponent},
    {path : "admins", component : AdminComponent},
    {path : "recommendations", component:RecommendationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
