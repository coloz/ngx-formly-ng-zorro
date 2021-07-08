import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <nz-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzName]="to.radio?.name"
      [nzButtonStyle]="to.radio?.buttonStyle"
      (ngModelChange)="
        to.radio?.ngModelChange && to.radio?.ngModelChange($event)
      "
    >
      <ng-container *ngIf="to.type !== 'button'; else button">
        <label
          nz-radio
          [nzValue]="o.value"
          *ngFor="let o of to.options"
          [nzDisabled]="o.disabled === true"
          >{{ o.label }}</label
        >
      </ng-container>

      <ng-template #button>
        <label
          nz-radio-button
          [nzValue]="o.value"
          *ngFor="let o of to.options"
          [nzDisabled]="o.disabled === true"
          >{{ o.label }}</label
        >
      </ng-template>
    </nz-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio
  extends FieldType
  implements OnInit, AfterViewInit
{
  /**
   *
   */
  constructor() {
    super();
    console.log(this);
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
