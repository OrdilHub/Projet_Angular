import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EleveService } from '../services/eleve.service';
@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {


  constructor(public serviceEle:EleveService) { }
  
  ngOnInit(): void {
  
  }

}
