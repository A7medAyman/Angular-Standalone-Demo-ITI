import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value:string): string
   {
     const digits = value.replace(/\D/g, '');
     return digits.match(/.{1,4}/g)?.join(' - ') ?? value;
   }

}
