import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { ElevesComponent } from './eleves/eleves.component';
import { Err404Component } from './err404/err404.component';
import { ContactComponent } from './contact/contact.component';
import { EleveComponent } from './eleve/eleve.component';

const routes: Routes = [
	{path:"",component:AccueilComponent},
  {path:"listeEtudiants",component:ElevesComponent},
  {path:"etudiant",component:EleveComponent},
  {path:"etudiant/:index",component:EleveComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:Err404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
