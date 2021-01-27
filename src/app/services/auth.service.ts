import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ConnexionU } from '../model/connexion';
import { Profil } from '../model/profil';
import { ConnecteService } from './connecte.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profil: Profil;
  constructor( private http:HttpClient, private connexionS:ConnecteService) {}


  conn(connexion: { id:any, mdp:string }){
    this.http.get<ConnexionU>("assets/ids/${connexion.id}@${connexion.mdp}.json").subscribe(
      data => {
        console.log(data);
        this.connexionS.connexion= true;
        if(data['statut']) this.connexionS.statut = data ['statut'];
      },
      erreur => {
        console.log(erreur);
        this.connexionS.isConneted=false;
        this.connexionS.statut=0;
        this.profil= <Profil>{};
      }
    )
      
  }

}
