import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-register',
  imports: [FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export default class RegisterComponent {}
