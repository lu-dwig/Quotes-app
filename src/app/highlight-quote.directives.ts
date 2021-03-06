import { Directive, ElementRef, HostListener } from '@angular/core';
import { Quotes } from './qoute';
@Directive({
    selector:'[appHighlightQoute]'
})
export class HighlightQuoteDirectives {

    constructor(private elem:ElementRef){
    }
    @HostListener("click") onClicks(){
        this.textDeco("blue")
    }
    @HostListener("dblclick") onDoubleClicks(){
        this.textDeco("None")
      }
      private textDeco(action:string){
        this.elem.nativeElement.style.color=action;
      }    
}
