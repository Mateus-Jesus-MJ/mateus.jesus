import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // Certifique-se de que está como standalone se estiver usando Angular moderno
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isDarkMode = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // 1. Verifica se estamos no navegador antes de acessar window ou localStorage
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
      } else {
        // Se não houver tema salvo, verifica a preferência do sistema do usuário
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    // 2. Proteção extra para o localStorage no método de clique
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
    // 3. O document só existe no navegador
    if (isPlatformBrowser(this.platformId)) {
      const theme = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
}