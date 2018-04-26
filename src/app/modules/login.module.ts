import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from '../services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [AuthGuardService]
})
export class LoginModule { }
