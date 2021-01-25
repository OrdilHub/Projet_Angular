import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profil } from '../model/profil';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  listeEleves:Array<Profil>=[];
  constructor(private http:HttpClient) { 
    this.http.get<Array<Profil>>("/assets/data/listeEleves.json").subscribe(
      data => {
        this.listeEleves=data;
      }
    )
    
  }
}
