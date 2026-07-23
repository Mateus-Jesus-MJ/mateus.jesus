import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Adiciona classe base para animação
    this.renderer.addClass(this.el.nativeElement, 'scroll-reveal-element');
  }

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // 15% do elemento visível
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'active');
        } else {
          // Opcional: Se quiser que a animação aconteça novamente ao subir/descer
          this.renderer.removeClass(this.el.nativeElement, 'active');
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
