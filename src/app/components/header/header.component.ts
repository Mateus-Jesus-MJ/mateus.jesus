import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public themeService = inject(ThemeService);
  
  isScrolled = false;
  isMobileMenuActive = false;
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    
    // Calculate scroll progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
    this.updateBodyScroll();
  }

  closeMobileMenu() {
    if (this.isMobileMenuActive) {
      this.isMobileMenuActive = false;
      this.updateBodyScroll();
    }
  }

  private updateBodyScroll() {
    if (this.isMobileMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
