import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnecteService } from './connecte.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  entetes:any;
  constructor(private connexionS:ConnecteService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.connexionS.token){
      this.entetes={
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+this.connexionS.token
        })
      }
    }else{
      this.entetes={
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    }
    return next.handle(request);
  }
}
