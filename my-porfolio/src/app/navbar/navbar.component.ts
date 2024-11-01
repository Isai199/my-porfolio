import { Component, HostListener } from '@angular/core';
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
  homeSections = [
    {
      id: "#section-about",
      name: "about"
    },
    {
      id: "#section-projects",
      name: "projects"
    },
    {
      id: "#section-contact",
      name: "contact"
    }
  ];

  scrollIntoView(elen: string) {
    document.querySelector(elen)?.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }

  ngOnInit() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
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
