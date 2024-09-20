import { Component, HostListener, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { createCustomElement } from "@angular/elements";
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from "./popup.service";
import { FooterComponent } from "./footer/footer.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [PopupService],
  imports: [RouterOutlet, PopupComponent, NavbarComponent, FooterComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-porfolio';

  companyUrls = [
    {
      name: 'emkode',
      url: 'https://www.emkode.com/?fbclid=IwY2xjawEaVEFleHRuA2FlbQIxMAABHambvVjFv9CPYU8yucI5PsCghc8stN9FyZvuSYpaAD7cxuDj9piQVO9RfA_aem_WCADCyySlCOLKyfBFdsvSA',
    },
    {
      name: 'cao',
      url: 'https://www.cao.com.mx/',
    },
    {
      name: 'segared',
      url: 'https://segared.us/segared/index.php',
    },
  ];


  projects = [
    {
      name: 'Pryect\'s name',
      description: 'A little description',
      image: 'emkode/hero.png',
      allurls: 'emkode/hero.png'
    },
    {
      name: 'work report',
      description: 'A little description',
      image: 'reporte-de-obra/reporte-obra-menu.png',
      allurls: 'reporte-de-obra/reporte-obra-adjuntar-archivo.png'
    },
    {
      name: 'xml',
      description: 'A little description',
      image: 'xml/xml-menu.png',
      allurls: 'xml/xml-menu.png'
    },
    // {
    //   name: 'segared administration',
    //   description: '',
    //   image: 'segared/tabla-usuarios.png'
    // },
    // {
    //   name: 'refactoring',
    //   description: '',
    //   image: 'refactorizar-codigo/lista-empleados.png'
    // },
  ];

  currentIndex = 0;
  visibleProjects = 3;
  intervalId: any;
  numDots = 0;

  // TODO: Analizar este codigo, para ver si se quita o se queda, de momento muestra el modal o popup.
  constructor(
    injector: Injector,
    public popup: PopupService
  ) {
    const PopupElement = createCustomElement(PopupComponent, {injector});

    //customElements.define('popup-element', PopupElement);
  }

  ngOnInit() {
    this.updateVisibleProjects();
    this.startAutoSlide();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateVisibleProjects();
  }

  // TODO: Al cambiar de tamano de la pantalla, no siempre vuelve a mostrar todos los proyectos.
  updateVisibleProjects() {
    const width = window.innerWidth;
    if (width < 600) {
      this.visibleProjects = 1;
    } else if(width >= 600 && width < 900) {
      this.visibleProjects = 2;
    } else {
      this.visibleProjects = 3;
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  // TODO: arrglar el bug, de que se muestran de manera aleatoria los items o proyectos
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + this.visibleProjects) % this.projects.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - this.visibleProjects + this.projects.length) % this.projects.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index * this.visibleProjects;
  }

  getDotCount(): number {
    this.numDots = Math.floor(this.currentIndex / this.visibleProjects);
    return Math.ceil(this.projects.length / this.visibleProjects);
  }

  generateDotArray(): number[] {
    let newArray = Array(this.getDotCount());
    return newArray;
  }
}
