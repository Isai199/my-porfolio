import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { createCustomElement } from "@angular/elements";
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from "./popup.service";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [PopupService],
  imports: [RouterOutlet, PopupComponent, NavbarComponent, FooterComponent],
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

  // TODO: Analizar este codigo, para ver si se quita o se queda, de momento muestra el modal o popup.
  constructor(
    injector: Injector,
    public popup: PopupService
  ) {
    const PopupElement = createCustomElement(PopupComponent, {injector});

    //customElements.define('popup-element', PopupElement);
  }
}
