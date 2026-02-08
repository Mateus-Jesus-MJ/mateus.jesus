import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('skillCard') cards!: QueryList<ElementRef>;
  private observer: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Só executa se estiver no navegador
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initObserver();
      }, 400);
    }
  }

  private initObserver() {
    // Verificação redundante de segurança
    if (typeof IntersectionObserver === 'undefined') return;

    const observerOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          this.observer?.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (this.cards) {
      this.cards.forEach((card) => this.observer?.observe(card.nativeElement));
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}