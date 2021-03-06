import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Cartelera, CreditosDetalle, PeliculaDetalle } from '../interfaces/index';


const lenguaje:string='languaje=es&include_image_languaje=es';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private popularesPage:number=1;
  generos:any[]=[];

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

  getPeliculaDetalle(id :number){
    return this.http.get<PeliculaDetalle>(`${environment.url}/movie/${id}?api_key=${environment.apiKey}`);
  }
  getCreditosDetalle(id :number){
    return this.http.get<CreditosDetalle>(`${environment.url}/movie/${id}/credits?api_key=${environment.apiKey}`);
  }
  getBusqueda(query :string){
    return this.http.get<Cartelera>(`${environment.url}/search/movie?query=${query}&api_key=${environment.apiKey}`);
  }

  getBusquedaPorGenero():Promise<any[]>{

    return new Promise(resolve =>{
      this.http.get<Cartelera>(`${environment.url}/genre/movie/list?api_key=${environment.apiKey}`).subscribe(
       resp=>{
       this.generos=resp['genres'];
       console.log(this.generos);
       resolve(this.generos)
       }
 
     );


    });
  }
  
  
}
