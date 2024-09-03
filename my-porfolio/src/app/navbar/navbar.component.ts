import { Component, ComponentFactory, HostListener } from '@angular/core';
import { NgClass, NgIf } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  myGithubUrl = "http://github.com/Isai199";
  myLinkedinUrl ="http://www.linkedin.com/in/isai-gomez-8b9a66247";
  homeButtonData = {name: "isai gómez", url: "./"};

  isMenuOpen = false;
  isMobileView = false;

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
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
