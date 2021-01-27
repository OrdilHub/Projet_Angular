import {NgModule} from '@angular/core'

import {Routes, RouterModule} from '@angular/router'

export const routes= []

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class EditionRoutingModule{}