import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[appHover]' })
export class HoverDirective {

    constructor(
        private element: ElementRef,
        private renderer: Renderer2) { }

    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: Event): void {
        this.renderer.addClass(this.element.nativeElement, 'active');
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event: Event): void {
        this.renderer.removeClass(this.element.nativeElement, 'active');
    }
}