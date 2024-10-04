import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit, Injector } from '@angular/core';
import { dot } from 'node:test/reporters';

@Directive({
  selector: '[appSlider]',
  standalone: true
})
export class SliderDirective {

  // TODO:
  // 1. Ver si se puede reducir el codigo aun mas, y que sea mas eficiente.
  
  @Input() items: any[] = [];
  @Input() imageWidth = 400;
  @Input() imageHeight = 200;
  @Input() visibleItems = 3;
  @Input() isDotAvailable = false;
  private prevButton: HTMLElement | null = null;
  private nextButton: HTMLElement | null = null;
  private dotSapn: HTMLElement | null = null;
  private slideCount = 0;
  private currentIndex = 0;
  
  private numDots = 0;
  
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    this.slideCount = this.items.length;
    this.showSlide(this.currentIndex);
    if (this.isDotAvailable) {
      this.createDotElement();
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showSlide(this.currentIndex);
    if (this.isDotAvailable) {
      this.createDotElement();
    }
  }
  
  ngAfterViewInit() {
    this.showSlide(this.currentIndex);
    this.prevButton = this.el.nativeElement.querySelector('.prev-btn');
    this.nextButton = this.el.nativeElement.querySelector('.next-btn');
    this.dotSapn = this.el.nativeElement.querySelectorAll('.dot');
    
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
    const slideElements = this.el.nativeElement.querySelectorAll('li');
    slideElements.forEach((slide: any, i: number) => {
      if (i >= startIndex && i < startIndex + this.visibleItems) {
        this.renderer.setStyle(slide, 'display', 'block');
      } else {
        this.renderer.setStyle(slide, 'display', 'none');
      }
    });
    if (this.isDotAvailable) {
      this.isDotActive(startIndex);
    }
  }
  
  createDotElement() {
    const dotContainer = this.el.nativeElement.querySelector('.dots');
    const dotsElements = this.el.nativeElement.querySelectorAll('.dots span');
    dotsElements.forEach((dot: any) => {
      this.renderer.removeChild(dotContainer, dot);
    });
    for (let i = 0; i < this.generateDotArray().length; i++) {
      const dotElement = this.renderer.createElement('span');
      dotElement.classList.add('dot');
      if (i === this.numDots) {
        this.renderer.addClass(dotElement, 'active');
      }
      if (dotElement) {
        this.renderer.listen(dotElement, 'click', () => this.goToSlide(i));
      }
      dotContainer.appendChild(dotElement);
    }     
  }
    
  isDotActive(index?: number) {
    const dots = this.el.nativeElement.querySelectorAll('.dots span');
    const startIndex = (index != null) ? index : this.currentIndex;
    this.numDots = Math.floor(startIndex / this.visibleItems);
    dots.forEach((dot: any, index: number) => {
      if (index === this.numDots) {
        this.renderer.addClass(dot, 'active');
      } else {
        this.renderer.removeClass(dot, 'active');
      }
    });
  }
    
  goToSlide(index: number) {  
    this.currentIndex = index * this.visibleItems;
    this.isDotActive();
    this.showSlide(this.currentIndex);
  }

  getDotCount(): number {
    return Math.ceil(this.items.length / this.visibleItems);
  }
  
  generateDotArray(): number[] {
    let newArray = Array(this.getDotCount());
    return newArray;
  }
}
