import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = signal<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  constructor() {
    this.applyTheme(this.theme());
    effect(() => {
      this.applyTheme(this.theme());
    });
  }

  toggleTheme() {
    const next = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(next);
    this.applyTheme(next);
  }

  private applyTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
  }

  get isDark() {
    return this.theme() === 'dark';
  }

  get currentTheme() {
    return this.theme();
  }
}
