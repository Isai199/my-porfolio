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

  // TODO: Recivir estos json, de una bds
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
        imagesUrl: [
          'emkode/hero.png',
          'emkode/contact.png',
          'emkode/footer.png',
          'emkode/hero-slider.png',
          'emkode/ideas.png',
          'emkode/tecnologias.png',
        ],
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
        imagesUrl: [
          'reporte-de-obra/reporte-obra-adjuntar-archivo.png',
          'reporte-de-obra/reporte-obra-editar-reporte.png',
          'reporte-de-obra/reporte-obra-importar-imagenes.png',
          'reporte-de-obra/reporte-obra-menu-slider.png',
          'reporte-de-obra/reporte-obra-menu.png',
          'reporte-de-obra/reporte-obra-mostrar-reporte.png',
          'reporte-de-obra/reporte-obra-nuevo-reporte.png',
        ]
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
        imagesUrl: [
          'xml/xml-menu.png',
          'xml/xml-archivos.png',
          'xml/xml-arrastrar-archivos-xml.png',
          'xml/xml-menu-dos.png',
          'xml/xml-menu-slider.png',
        ],
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
        imagesUrl: [
          'segared/tabla-usuarios.png',
          'segared/clientes.png',
          'segared/empresas.png',
          'segared/navbar.png',
          'segared/nuevo-usuario.png',
          'segared/productos.png',
          'segared/tabla-actividades-ultimas-cotizaciones.png',
          'segared/tabla-registro-ultimos-movimientos.png',
        ]
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
        imagesUrl: [
          'refactorizar-codigo/lista-empleados-slider.png',
          'refactorizar-codigo/add-employee.png',
          'refactorizar-codigo/filter.png',
        ]
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
        imagesUrl: [
          'refactorizar-codigo/lista-empleados-slider.png',
          'refactorizar-codigo/add-employee.png',
          'refactorizar-codigo/filter.png',
        ]
      }
    },
  ];

  
  visibleProjects = 3;
  imageWidth = 400;
  imageHeight = 200;

  constructor(public popup: PopupService) {}

  // TODO: Chacar si puedo minimizar este codigo, o moverlo a la directiva slider
  ngOnInit() {
    this.updateVisibleProjects();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateVisibleProjects();
  }

  // FIXME: Al cambiar de tamano de la pantalla(con el comando wndow + flechas), no siempre vuelve a mostrar todos los proyectos.
  updateVisibleProjects() {
    const width = window.innerWidth;
    if (width < 600) {
      this.visibleProjects = 1;
      this.imageWidth = 250;
      this.imageHeight = 150;
    } else if(width >= 600 && width < 900) {
      this.visibleProjects = 2;
      this.imageWidth = 250;
      this.imageHeight = 150;
    } else {
      this.visibleProjects = 3;
      this.imageWidth = 400;
      this.imageHeight = 200;
    }
  }
}

// TODO: las interfaces, hay que declararlas en un archivo diferente con el comando de angular
interface Projects {
  name: string,
  description: string,
  image: string,
  allurls: Project
}
