import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Project } from '../project';
import { SliderDirective } from '../slider.directive';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [SliderDirective, NgFor],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ]),
  ]

})
export class PopupComponent {
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): Project {
    return this._message;
  }

  set message(message: Project) {
    this._message = message;
    this.state = 'opened';
  }

  private _message: any = {};

  @Output()
  closed = new EventEmitter<void>();
}
