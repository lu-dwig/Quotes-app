import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[appHighlightQoute]'
})
export class HighlightQuoteDirectives {

    constructor(private elem:ElementRef){
    }
    @HostListener("click")
}