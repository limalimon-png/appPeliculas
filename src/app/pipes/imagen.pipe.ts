import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';


const URL:string = environment.imgPath;

@Pipe({
  name: 'imagen2'
})
export class ImagenPipe implements PipeTransform {
 

  transform(img: string): string {
    if(img){
    return (URL+img);}
    console.log("no hay foto");
    return './assets/no-image-banner.jpg';
  }

}
