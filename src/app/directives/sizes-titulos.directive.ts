import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSizesTitulos]'
})
export class SizesTitulosDirective {

  constructor(
    private titulo:ElementRef
  ) {
    titulo.nativeElement.style.fontSize='20px';
    titulo.nativeElement.style.fontWeight='bold';
    titulo.nativeElement.style.textTransform='uppercase';
    titulo.nativeElement.style.textDecoration='underline';

  }
}
