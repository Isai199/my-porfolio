import { Component } from '@angular/core';
import { ScrollDirective } from '../scroll.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {}
