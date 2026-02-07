import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('skillCard') cards!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // O segredo está aqui: dar um tempo para o DOM estabilizar
      setTimeout(() => {
        this.initObserver();
      }, 600);
    }
  }

  private initObserver() {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target); // Para de observar após animar
        }
      });
    }, { 
      threshold: 0.05, // Dispara com apenas 5% visível para não falhar
      rootMargin: '0px 0px -50px 0px' 
    });

    if (this.cards) {
      this.cards.forEach(card => observer.observe(card.nativeElement));
    }
  }
}