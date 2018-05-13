import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from '../components/edit-page/edit-page.component';
import { GenericPageComponent } from '../components/generic-page/generic-page.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { GalleryPageComponent } from '../components/gallery-page/gallery-page.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { LoginComponent } from '../components/login/login.component';
import { GalleryModalComponent } from '../components/gallery-modal/gallery-modal.component';
import { FeaturesPageComponent } from '../components/features-page/features-page.component';
import { AdminPageComponent } from '../components/admin-page/admin-page.component';
import { DemoEditPageComponent } from '../components/demo-edit-page/demo-edit-page.component';
import { GetStartedPageComponent } from '../components/get-started-page/get-started-page.component';
import { LoginModule } from './login.module';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ImageInputComponent } from '../components/image-input/image-input.component';
import { DemoPageComponent } from '../components/demo-page/demo-page.component';
import { ImageModalComponent } from '../components/image-modal/image-modal.component';
import { PageControlComponent } from '../components/page-control/page-control.component';
import { FooterComponent } from '../components/footer/footer.component';
import { QuillComponent } from '../components/quill/quill.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'modal', component: GalleryModalComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'demo', component: DemoEditPageComponent },
  { path: 'get-started', component: GetStartedPageComponent },
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
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    QuillModule
  ],
  exports: [
    HomePageComponent,
    PageControlComponent,
    AdminPageComponent,
    EditPageComponent,
    QuillComponent,
    GenericPageComponent,
    FeaturesPageComponent,
    FooterComponent,
    GalleryPageComponent,
    GalleryModalComponent,
    ImageInputComponent,
    DemoPageComponent,
    DemoEditPageComponent,
    GetStartedPageComponent,
    ImageModalComponent
  ],
  declarations: [
    HomePageComponent,
    PageControlComponent,
    AdminPageComponent,
    EditPageComponent,
    QuillComponent,
    GenericPageComponent,
    FeaturesPageComponent,
    FooterComponent,
    GalleryPageComponent,
    GalleryModalComponent,
    ImageInputComponent,
    DemoPageComponent,
    DemoEditPageComponent,
    GetStartedPageComponent,
    ImageModalComponent,
  ]
})
export class PagesModule {}

