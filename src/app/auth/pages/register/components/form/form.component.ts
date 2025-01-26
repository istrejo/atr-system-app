import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@Component({
  selector: 'app-form',
  imports: [PrimengModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private theemSvc = inject(ThemeService);

  /**
   * The function `toggleDarkMode` toggles the theme between light and dark using a service called
   * `theemSvc`.
   */
  toggleDarkMode() {
    this.theemSvc.toggleTheme();
  }
}
