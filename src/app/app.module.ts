import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { ElevesComponent } from './eleves/eleves.component';
import { Err404Component } from './err404/err404.component';
import { ContactComponent } from './contact/contact.component';
import { EleveComponent } from './eleve/eleve.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PiedComponent,
    ElevesComponent,
    Err404Component,
    ContactComponent,
    EleveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
