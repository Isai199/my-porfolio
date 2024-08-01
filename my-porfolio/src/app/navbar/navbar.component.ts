import { Component, ComponentFactory } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  myGithubUrl = "http://github.com/Isai199";
  myLinkedinUrl ="http://www.linkedin.com/in/isai-gomez-8b9a66247";
  homeButtonData = {name: "isai gómez", url: "./"};

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
}
