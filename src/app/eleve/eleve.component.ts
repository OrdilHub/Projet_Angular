import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EleveService } from '../services/eleve.service';


@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {
  indexEleve=-1;

  constructor(public serviceEle:EleveService, private routeParametres:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParametres.params.subscribe(
      parameters => {
        console.log("Parametres de la route", parameters)
        if (parameters['index']){
          this.indexEleve=+parameters['index']
        }
      }
    );

  }

}
