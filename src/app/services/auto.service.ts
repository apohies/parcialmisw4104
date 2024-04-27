import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Auto} from '../models/auto';
import { RouterModule } from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class AutoService {
  private url = "https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json";
  constructor(private htpp:HttpClient) { 

  }

  getAutos():Observable<Auto[]>{
    return this.htpp.get<Auto[]>(this.url);
  }
}
