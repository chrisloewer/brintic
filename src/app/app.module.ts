import { NgModule } from '@angular/core';
import { PageControlComponent } from './components/page-control/page-control.component';
import { PagesModule } from './modules/pages.module';

@NgModule({
  imports: [
    PagesModule
  ],
  declarations: [],
  providers: [],
  bootstrap: [PageControlComponent]
})
export class AppModule { }
