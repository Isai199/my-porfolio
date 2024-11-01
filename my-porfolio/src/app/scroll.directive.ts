import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {
  homeSections = ["#section-about", "#section-projects", "#section-contact"];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const sections = this.el.nativeElement.querySelectorAll('a');
    sections.forEach((dot: any, index: number) => {
      this.renderer.listen(dot,'click', () => this.scrollIntoView(this.homeSections[index]));
    });
  }

  scrollIntoView(elen: string) {
    document.querySelector(elen)?.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }
}
