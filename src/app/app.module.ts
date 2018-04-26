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

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'generic', component: GenericPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditPageComponent, canActivate: [AuthGuardService] },
  { path: '', component: HomePageComponent }
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
    GenericPageComponent
  ],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
