import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageControlComponent } from './components/page-control/page-control.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './modules/login.module';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomePageComponent,
    PageControlComponent,
    AdminPageComponent
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
