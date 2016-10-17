import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { IParty } from '../../store';
import { Panel } from '../';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
const TEMPLATE = require('./table.template.html');
@Component({
  selector: 'tb-table',
  template: TEMPLATE,
  directives: [Panel, REACTIVE_FORM_DIRECTIVES ]
})
export class Table {
  @Input() table: any;
  @Input() parties: Observable<IParty>;
  @Output() seatParty: EventEmitter<any> = new EventEmitter<any>();
  partyId: number = -1;
};

