import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnexionU } from '../model/connexion';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionU: ConnexionU;

  constructor() { }

  ngOnInit(): void {
    this.connexionU={
      id:'',
      mdp:'',
    }
  }

  soumissionFormulaire(f:NgForm){
    // console.log("Formulaire envoyé");
    console.log("Données envoyées", f);
    console.log("Comparaison des données", f.value, this.connexionU)
  }

}
