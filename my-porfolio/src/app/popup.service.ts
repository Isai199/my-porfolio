import { ApplicationRef, createComponent, EnvironmentInjector, Injectable, ChangeDetectorRef  } from '@angular/core';
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

    // NOTE: Angular solo detecta cambios en ciertos eventos como al hacer click, 
    // es por eso que aqui estoy obligado a angular a detectar un cambio(que es el mensaje)
    popupComponentRef.injector.get(ChangeDetectorRef).detectChanges();
  }
}
