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


  // TODO: colocar en el campo "liveUrl" el link del repositorio o de la pagina
  projects:Projects[] = [
    {
      name: 'emkode website',
      description: 'web development',
      image: 'emkode/hero-slider.png',
      allurls: {
        title: 'Web site for Emkode',
        description: 'A website that I made together with a designer and a senior tester for the emkode company. This site has info presentations such as members\' history, experience and contact.',
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
      description: 'web development',
      image: 'reporte-de-obra/reporte-obra-menu-slider.png',
      allurls: {
        title: 'work report',
        description: 'A software project, that helps the company CAO for many administration information of the user report(or cao workers), this site had images, a lot of user information to create a report, and a crud. ',
        properties: {
          type: 'web application',
          lenguage: 'html, js, css, php',
          tools: 'bootstrap, sql server, vsc',
          country: 'Mexico'
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
      description: 'web development',
      image: 'xml/xml-menu-slider.png',
      allurls: {
        title: 'xml module',
        description: 'A software project, that helps the company CAO for importing xml documents extracting its information for then saving them in the dbs, and show that information in a table for the user administrator.',
        properties: {
          type: 'web application',
          lenguage: 'html, js, css, php',
          tools: 'bootstrap, sql server, vsc',
          country: 'Mexico'
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
      description: 'web development',
      image: 'segared/tabla-usuarios-slider.png',
      allurls: {
        title: 'segared administration crud',
        description: 'A software project, for the segared company, basically it was a system that had an administration section with another 5 sections such as users, customers, companies, products and activity registers where the user administrator see, delete, add and update the information.',
        properties: {
          type: 'web application',
          lenguage: 'html, js, css, php',
          tools: 'bootstrap, docker, vsc, github',
          country: 'Mexico'
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
      description: 'web development',
      image: 'refactorizar-codigo/lista-empleados-slider.png',
      allurls: {
        title: 'refactoring old code',
        description: 'This was a personal project that I made for my first programmer job but with spaghetti code, and then I decided to refactor it with my most advanced knowledge of javascript and web design.',
        properties: {
          type: 'web application',
          lenguage: 'css, js, php, ts',
          tools: 'vsc, github, laragon, sql server',
          country: 'Mexico'
        },
        imagesUrl: [
          'refactorizar-codigo/lista-empleados-slider.png',
          'refactorizar-codigo/add-employee.png',
          'refactorizar-codigo/filter.png',
        ]
      }
    },
    {
      name: 'portfolio',
      description: 'web development',
      image: 'portfolio/portfolio-hero.png',
      allurls: {
        title: 'my portfolio',
        description: 'This is my portfolio, and it was made with angular, and I tried to implement the best practice to build it, and make it easier to read and simpler for the user.',
        properties: {
          type: 'web page',
          lenguage: 'ts, css, html',
          tools: 'angular, github, github pages',
          country: 'Mexico'
        },
        imagesUrl: [
          'portfolio/portfolio-hero.png',
          'portfolio/portfolio-projects.png',
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
