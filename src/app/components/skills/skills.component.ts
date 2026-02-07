import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, OnDestroy, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { PortfolioService } from '../experience/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('skillCard') cards!: QueryList<ElementRef>;
  private observer: IntersectionObserver | null = null;
  skillsData: any[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    this.portfolioService.getDados().subscribe(data => {
      this.skillsData = data.competencias;
    });
  }

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