import { Component, HostListener, ComponentFactory } from '@angular/core';
import { NgClass, NgIf, NgStyle } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  myGithubUrl = "http://github.com/Isai199";
  myLinkedinUrl ="http://www.linkedin.com/in/isai-gomez-8b9a66247";
  homeButtonData = {name: "isai gómez", url: "./"};

  isMenuOpen = false;
  isMobileView = false;
  displayStatus = 'inline-flex';

  currentStyles: Record<string, string> = {};

  // TODO: colocar reedireccionamiento correspondiente
  websiteUrls = [
    {
      name: "about",
      url: "https://dictionary.cambridge.org/es/diccionario/ingles-espanol/about",
    },
    {
      name: "projects",
      url: "https://www.microsoft.com/es-mx/microsoft-365/project/project-management-software"
    },
    {
      name: "contact",
      url: "https://es.wikipedia.org/wiki/Contact_(pel%C3%ADcula)",
    }
  ];

  ngOnInit() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isMobileView = window.innerWidth < 768;
    if (!this.isMobileView) {
      this.isMenuOpen = false;
      this.displayStatus = 'inline-flex';
    } else {
      this.displayStatus = 'none';
    }
    this.setNavbarStyles();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  setNavbarStyles() {
    if (this.isMobileView) {
      this.currentStyles = {
        'flex-direction': 'column',
        'position': 'absolute',
        'width': '100%',
        'top': '80px',
        'left': '0',
        'text-align': 'center' ,
        'background-color': 'var(--dark-muted)' ,
        'row-gap': '30px',
        'padding': '30px 0',
      }
    } else {
      this.currentStyles = {};
    }
  }

}
