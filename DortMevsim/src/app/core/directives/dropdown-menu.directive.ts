import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  private subMenuContainer: any;
  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    this.subMenuContainer = this.element.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(this.subMenuContainer, 'd-block');
    this.renderer.removeClass(this.subMenuContainer, 'd-none');
  }
  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    this.subMenuContainer = this.element.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(this.subMenuContainer, 'd-none');
    this.renderer.removeClass(this.subMenuContainer, 'd-block');
  }
}
