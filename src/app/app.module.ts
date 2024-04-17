import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EsempioUnoComponent } from './components/esempio-uno/esempio-uno.component';
import { EsempioDueComponent } from './components/esempio-due/esempio-due.component';
import { EsempioTreComponent } from './components/esempio-tre/esempio-tre.component';
import { EsempioQuattroComponent } from './components/esempio-quattro/esempio-quattro.component';

@NgModule({
  declarations: [
    AppComponent,
    EsempioUnoComponent,
    EsempioDueComponent,
    EsempioTreComponent,
    EsempioQuattroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
