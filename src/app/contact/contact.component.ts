import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactI } from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactE:ContactI;
  constructor() { }

  ngOnInit(): void {
    this.contactE={
      nom:'',
      mail:'',
      mdp:'',
      msg:''
    }
  }

  suiviInput(): void {
    console.log(this.contactE);
  }


  soumissionFormulaire(f:NgForm){
    // console.log("Formulaire envoyé");
    console.log("Données envoyées", f);
    console.log("Comparaison des données", f.value, this.contactE)
  }
  

}
