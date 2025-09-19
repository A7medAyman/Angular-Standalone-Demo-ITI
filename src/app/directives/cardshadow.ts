import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardshadow]'
})
export class Cardshadow {

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.ele.nativeElement.style.boxShadow ='0 10px 24px rgba(0,0,0,0.35)'
    this.ele.nativeElement.style.borderRadius = '18px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.boxShadow = 'none';
    this.ele.nativeElement.style.borderRadius = '0';
  }

  }
