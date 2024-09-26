import { ApplicationRef, createComponent, EnvironmentInjector, Injectable } from '@angular/core';
import {NgElement, WithProperties} from '@angular/elements';
import { PopupComponent } from "./popup/popup.component";
import { Project } from './project';

@Injectable()
export class PopupService {

  constructor(
    private injector: EnvironmentInjector,
    private ApplicationRef: ApplicationRef
  ) {}

  // antes de agregar al dom, se define la estructra del popup
  showAsComponent(message: Project) {
    const popup = document.createElement('popup-component');

    const popupComponentRef = createComponent(PopupComponent, {
      environmentInjector: this.injector,
      hostElement: popup
    });

    this.ApplicationRef.attachView(popupComponentRef.hostView);

    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.ApplicationRef.detachView(popupComponentRef.hostView);
    });

    popupComponentRef.instance.message = message;

    document.body.appendChild(popup);
  }

  // NOTE: Esto igual genera un popup pero como un elemtno html(Igual hace falta revisar bien como funciona esto)
  // showAsElement(message: string) {
  //   const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

  //   popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

  //   popupEl.message = message;

  //   document.body.appendChild(popupEl);
  // }
  
}
