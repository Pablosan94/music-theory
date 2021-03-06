import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./modules/home/components";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'exercises', loadChildren: () => import('./modules/exercises/exercises.module').then(m => m.ExercisesModule) },
  { path: 'lessons', loadChildren: () => import('./modules/lessons/lessons.module').then(m => m.LessonsModule) },
  { path: 'library', loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule) },
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
