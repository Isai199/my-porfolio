import { Component, HostListener, inject, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from "./popup.service";
import { FooterComponent } from "./footer/footer.component";
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Projects, Company } from './project';
import { SliderDirective } from './slider.directive';
import { HousingService } from './housing.service';

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
  housingCompanyList: Company[] = [];
  housingProjectsList: Projects[] = [];
  housingService: HousingService = inject(HousingService);

  visibleProjects = 3;
  imageWidth = 400;
  imageHeight = 200;

  constructor(public popup: PopupService) {
    this.housingService.getAllData().then((housingDataList) => {
      this.housingCompanyList = housingDataList.companyUrls;
      this.housingProjectsList = housingDataList.projects;
    });
  }
  
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