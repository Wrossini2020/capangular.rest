import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ultimaLetra'
})
export class UltimaLetraPipe implements PipeTransform {

  transform(value: string): string {
    let texto:string = '';
    let letra: string = '';
   /* letra = value.substring(value.length, 1).toUpperCase;
    texto = value.substring(1, value.length - 1) + letra;
    */
   letra = value.substr(value.length-1,1).toUpperCase();
   texto = value.substr(0, value.length-1) + letra;
    return texto;
  }

}
