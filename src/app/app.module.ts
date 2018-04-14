import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageControlComponent } from './components/page-control/page-control.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    HomePageComponent,
    PageControlComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
