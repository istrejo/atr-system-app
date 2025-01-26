import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimengModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private themeSvc = inject(ThemeService);

  constructor() {
    this.themeSvc.initTheme();
  }
}
