import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnecteService {
  connexion: boolean;
  statut: any;
  isConneted: boolean;
  token: any;

  constructor() { }

  lancement(){}
}
