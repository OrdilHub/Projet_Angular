import {NgModule} from '@angular/core'

import {Routes, RouterModule} from '@angular/router'
import { AccueilComponent } from 'src/app/accueil/accueil.component'
import { EleveComponent } from 'src/app/eleve/eleve.component'

export const routes= [
    {path:'',component:AccueilComponent,children:[
        {path:'etudiant',component:EleveComponent}
        
    ]}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class EditionRoutingModule{}