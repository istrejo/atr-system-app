import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-login',
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {}
