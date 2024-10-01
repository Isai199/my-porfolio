import { Component, HostListener, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from "./popup.service";
import { FooterComponent } from "./footer/footer.component";
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Project } from './project';
import { SliderDirective } from './slider.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [PopupService],
  imports: [RouterOutlet, PopupComponent, NavbarComponent, FooterComponent, NgFor, NgIf, NgOptimizedImage, SliderDirective],
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


  projects:Projects[] = [
    {
      name: 'Pryect\'s name',
      description: 'A little description',
      image: 'emkode/hero-slider.png',
      allurls: {
        title: 'Web site for Emkode',
        description: '',
        properties: {
          type: 'website',
          lenguage: 'html, css, js',
          tools: 'vsc, github',
          country: 'mexico',
          company: 'emkode',
          liveUrl: 'https://www.emkode.com/?fbclid=IwY2xjawEaVEFleHRuA2FlbQIxMAABHambvVjFv9CPYU8yucI5PsCghc8stN9FyZvuSYpaAD7cxuDj9piQVO9RfA_aem_WCADCyySlCOLKyfBFdsvSA'

        },
        imageUrl: 'emkode/hero.png',
      }
    },
    {
      name: 'work report module',
      description: 'A little description',
      image: 'reporte-de-obra/reporte-obra-menu-slider.png',
      allurls: {
        title: 'work report',
        description: '',
        properties: {
          type: '',
          lenguage: '',
          tools: '',
          country: ''
        },
        imageUrl: 'reporte-de-obra/reporte-obra-adjuntar-archivo.png',
      }
    },
    {
      name: 'xml',
      description: 'A little description',
      image: 'xml/xml-menu-slider.png',
      allurls: {
        title: 'xml module',
        description: '',
        properties: {
          type: '',
          lenguage: '',
          tools: '',
          country: ''
        },
        imageUrl: 'xml/xml-menu.png',
      }
    },
    {
      name: 'segared administration',
      description: 'A little description',
      image: 'segared/tabla-usuarios-slider.png',
      allurls: {
        title: 'segared administration crud',
        description: '',
        properties: {
          type: '',
          lenguage: '',
          tools: '',
          country: ''
        },
        imageUrl: 'segared/tabla-usuarios.png',
      }
    },
    {
      name: 'refactoring',
      description: 'A little description',
      image: 'refactorizar-codigo/lista-empleados-slider.png',
      allurls: {
        title: 'refactoring old code',
        description: '',
        properties: {
          type: '',
          lenguage: '',
          tools: '',
          country: ''
        },
        imageUrl: 'refactorizar-codigo/lista-empleados-slider.png',
      }
    },
    {
      name: 'refactoring',
      description: 'A little description',
      image: 'refactorizar-codigo/lista-empleados-slider.png',
      allurls: {
        title: 'refactoring old code',
        description: '',
        properties: {
          type: '',
          lenguage: '',
          tools: '',
          country: ''
        },
        imageUrl: 'refactorizar-codigo/lista-empleados-slider.png',
      }
    },
  ];

  
  
  imageWidth = 400;
  imageHeight = 200;
  numDots = 0;

  constructor(public popup: PopupService) {}

  // ngOnInit() {
  //   this.updateVisibleProjects();
  //   //this.startAutoSlide();
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.updateVisibleProjects();
  // }

  // FIXME: Al cambiar de tamano de la pantalla, no siempre vuelve a mostrar todos los proyectos.
  // updateVisibleProjects() {
  //   const width = window.innerWidth;
  //   if (width < 600) {
  //     this.visibleProjects = 1;
  //     this.imageWidth = 250;
  //     this.imageHeight = 150;
  //   } else if(width >= 600 && width < 900) {
  //     this.visibleProjects = 2;
  //     this.imageWidth = 250;
  //     this.imageHeight = 150;
  //   } else {
  //     this.visibleProjects = 3;
  //     this.imageWidth = 400;
  //     this.imageHeight = 200;
  //   }
  // }
  
  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  // }
  
  // TODO: arrglar el bug, de que se muestran de manera aleatoria los items o proyectos
  // TODO: Analizar si los proyectos, deben mostrarse de manera aleatoria
  // startAutoSlide() {
  //   this.intervalId = setInterval(() => {
  //     this.nextSlide();
  //   }, 3000);
  // }
  
  // NOTE: AL parecer el slider funciona bien con 6 items o proyectos
  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + this.visibleProjects) % this.projects.length;
  // }
  
  // previousSlide() {
  //   this.currentIndex = (this.currentIndex - this.visibleProjects + this.projects.length) % this.projects.length;
  // }
  
  // goToSlide(index: number) {
  //   this.currentIndex = index * this.visibleProjects;
  // }

  // getDotCount(): number {
  //   this.numDots = Math.floor(this.currentIndex / this.visibleProjects);
  //   return Math.ceil(this.projects.length / this.visibleProjects);
  // }

  // generateDotArray(): number[] {
  //   let newArray = Array(this.getDotCount());
  //   return newArray;
  // }
}

// TODO: las interfaces, hay que declararlas en un archivo diferente con el comando de angular
interface Projects {
  name: string,
  description: string,
  image: string,
  allurls: Project
}
