import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import { PageControlComponent } from './components/page-control/page-control.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageControlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
