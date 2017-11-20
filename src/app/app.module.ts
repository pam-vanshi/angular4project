import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import {Page2Component} from './page2/page2.component';
import {ModalComponent} from './modal/modal.component';
import { TComponent } from './t/t.component'


const appRoutes: Routes = [
  {
    path: 'page-2',
    componet: page2
  },
  {
    path: 'modal',
    componet: ModalComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
