import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { createCustomElement } from "@angular/elements";
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from "./popup.service";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [PopupService],
  imports: [RouterOutlet, PopupComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-porfolio';

  constructor(
    injector: Injector,
    public popup: PopupService
  ) {
    const PopupElement = createCustomElement(PopupComponent, {injector});

    //customElements.define('popup-element', PopupElement);
  }
}
