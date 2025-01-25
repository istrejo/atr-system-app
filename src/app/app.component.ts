import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimengModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  theme: string = 'light';
  title = 'primeng';

  selectedCountry: any = null;

  countries = [
    {
      name: 'United States',
      code: 'US',
    },
    {
      name: 'Canada',
      code: 'CA',
    },
    {
      name: 'Mexico',
      code: 'MX',
    },
    {
      name: 'United Kingdom',
      code: 'UK',
    },
    {
      name: 'Germany',
      code: 'DE',
    },
    {
      name: 'France',
      code: 'FR',
    },
    {
      name: 'Italy',
      code: 'IT',
    },
    {
      name: 'Spain',
      code: 'ES',
    },
    {
      name: 'Australia',
      code: 'AU',
    },
    {
      name: 'Japan',
      code: 'JP',
    },
  ];

  toggleDarkMode() {
    localStorage.setItem('theme', this.theme === 'light' ? 'dark' : 'light');
    const theme = localStorage.getItem('theme') || 'light';
    const element: HTMLElement | null = document.querySelector('html');
    element?.classList.toggle(theme);
  }
}
