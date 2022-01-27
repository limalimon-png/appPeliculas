import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Cartelera } from '../interfaces/index';


const lenguaje:string='languaje=es&include_image_languaje=es';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private popularesPage:number=1;

  constructor(private http:HttpClient) { }
  



  getcartelera(){
    const hoy =new Date();
    const mesSiguiente=new Date(hoy.getFullYear(),hoy.getMonth()+1,hoy.getDay());

    return this.http.get<Cartelera>(`${environment.url}/discover/movie?primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-01-30&api_key=${environment.apiKey}&${lenguaje}`);
  }


  getPopulares(){

    return this.http.get<Cartelera>(`${environment.url}/discover/movie?${'sort_by=popularity.desc'}&api_key=${environment.apiKey}&${lenguaje}&page=${this.popularesPage}`);
  }

  setPagina(numero:number){
    this.popularesPage+=numero;

  }
}
