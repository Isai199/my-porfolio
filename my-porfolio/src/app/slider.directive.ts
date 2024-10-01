import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appSlider]',
  standalone: true
})
export class SliderDirective {

  // TODO:
  // 1. Implementar los dots aqui, y que sean opcionales.
  // 2. En el slider de home, no es responsivo, hacer que detecte el tamano de la venta y ajustar 'visibleItems' en base a ello
  // 3. Implementar la funcionalidad de 'solo' mover los slider al popup para mover las imagenes

  @Input() items: any[] = [];
  @Input() imageWidth = 400;
  @Input() imageHeight = 200;
  private prevButton: HTMLElement | null = null;
  private nextButton: HTMLElement | null = null;
  private slideCount = 0;
  private currentIndex = 0;
  private visibleItems = 3;

  numDots = 0;


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.slideCount = this.items.length;
    this.showSlide(this.currentIndex);
  }

  ngAfterViewInit() {
    this.prevButton = this.el.nativeElement.querySelector('.prev-btn');
    this.nextButton = this.el.nativeElement.querySelector('.next-btn');

    if (this.prevButton) {
      this.renderer.listen(this.prevButton, 'click', () => this.previousSlide());
    }

    if (this.nextButton) {
      this.renderer.listen(this.nextButton, 'click', () => this.nextSlide());
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + this.visibleItems) % this.slideCount;
    if (this.currentIndex + this.visibleItems > this.slideCount) {
      this.currentIndex = this.slideCount - this.visibleItems;
    }
    this.showSlide(this.currentIndex);
  }
  
  previousSlide() {
    this.currentIndex = (this.currentIndex - this.visibleItems + this.items.length) % this.items.length;
    this.showSlide(this.currentIndex);
  }

  showSlide(startIndex: number) {
    const slideElements = this.el.nativeElement.querySelectorAll('li'); // TODO: checar si 'li' element afecta en el popup, en home si funciona
    slideElements.forEach((slide: any, i: number) => {
      if (i >= startIndex && i < startIndex + this.visibleItems) {
        this.renderer.setStyle(slide, 'display', 'block');
      } else {
        this.renderer.setStyle(slide, 'display', 'none');
      }
    });
  }

}
