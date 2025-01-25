import { Component } from '@angular/core';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@Component({
  selector: 'app-login',
  imports: [PrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {}
