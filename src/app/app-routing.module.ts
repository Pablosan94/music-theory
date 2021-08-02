import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from "./modules/dashboard/components";
import {ExercisesComponent} from "./modules/exercises/components";
import {HomeComponent} from "./modules/home/components";
import {LessonsComponent} from "./modules/lessons/components";
import {SettingsComponent} from "./modules/settings/components";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
