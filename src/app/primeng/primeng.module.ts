import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { FluidModule } from 'primeng/fluid';
import { MessageModule } from 'primeng/message';
import { InputOtpModule } from 'primeng/inputotp';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

const components = [
  ButtonModule,
  InputTextModule,
  CardModule,
  DatePickerModule,
  SelectModule,
  TextareaModule,
  FluidModule,
  MessageModule,
  InputOtpModule,
  ToggleButtonModule,
  PasswordModule,
  CheckboxModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...components],
  exports: [...components],
})
export class PrimengModule {}
