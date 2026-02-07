import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true, // Se o seu projeto for standalone
  imports: [],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('expItem') items!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Variáveis para o controle do arraste
  isDown = false;
  startX: number = 0;
  scrollLeft: number = 0;
  private observer: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Proteção para rodar IntersectionObserver apenas no navegador
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initObserver();
      }, 500);
    }
  }

  private initObserver() {
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    if (this.items) {
      this.items.forEach((item) => this.observer?.observe(item.nativeElement));
    }
  }

  // MÉTODOS DE ARRASTE (O que estava faltando no seu erro)
  startDragging(e: MouseEvent) {
    this.isDown = true;
    this.scrollContainer.nativeElement.classList.add('active');
    this.startX = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
  }

  stopDragging() {
    this.isDown = false;
    this.scrollContainer.nativeElement.classList.remove('active');
  }

  moveEvent(e: MouseEvent) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}