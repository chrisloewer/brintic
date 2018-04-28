import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageControlComponent } from './components/page-control/page-control.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './modules/login.module';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { WidthPipe } from './classes/width-pipe';
import { QuillModule } from 'ngx-quill';
import { QuillComponent } from './components/quill/quill.component';
import { GenericPageComponent } from './components/generic-page/generic-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { FeaturesPageComponent } from './components/features-page/features-page.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'edit',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  { path: 'edit/:id', component: EditPageComponent, canActivate: [AuthGuardService] },
  { path: ':id', component: GenericPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    QuillModule
  ],
  declarations: [
    HomePageComponent,
    PageControlComponent,
    AdminPageComponent,
    EditPageComponent,
    WidthPipe,
    QuillComponent,
    GenericPageComponent,
    FeaturesPageComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
