import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroTech {
  name: string;
  icon: string;
}

interface SkyNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isAccent: boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroWrapper') heroWrapper!: ElementRef<HTMLElement>;
  @ViewChild('heroSkyCanvas') heroSkyCanvas!: ElementRef<HTMLCanvasElement>;

  private animationFrameId: number | null = null;
  private mouse = { x: null as number | null, y: null as number | null, radius: 175 };
  private resizeHandler = () => this.resizeCanvas();
  private mouseMoveHandler = (e: MouseEvent) => {
    const rect = this.heroWrapper.nativeElement.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  };
  private mouseLeaveHandler = () => {
    this.mouse.x = null;
    this.mouse.y = null;
  };

  readonly heroTechs: HeroTech[] = [
    { name: 'Angular', icon: 'M12 2L3 5.5l1.4 11.2L12 22l7.6-5.3L21 5.5 12 2zm0 3.2l4.8 10.6h-1.8l-1-2.3h-4l-1 2.3H7.2L12 5.2zm0 3.7l-1.3 3h2.6L12 8.9z' },
    { name: '.NET', icon: 'M4 12h16M12 4v16M6 6l12 12M18 6L6 18' },
    { name: 'Laravel', icon: 'M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zm0 9l8-4.5M12 11v9M12 11L4 6.5' },
    { name: 'Python', icon: 'M12 3c-3 0-4 1.3-4 3v2h4v1H6c-2 0-3 1.3-3 3.5S4 16 6 16h2v-2c0-1.7 1.3-3 3-3h4c1.7 0 3-1.3 3-3V6c0-1.7-1-3-4-3zm0 18c3 0 4-1.3 4-3v-2h-4v-1h6c2 0 3-1.3 3-3.5S20 8 18 8h-2v2c0 1.7-1.3 3-3 3H9c-1.7 0-3 1.3-3 3v2c0 1.7 1 3 4 3z' },
    { name: 'Node.js', icon: 'M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z' },
    { name: 'TypeScript', icon: 'M4 4h16v16H4V4zm4 6h5m-2.5 0v6m5.5-5.5c-.7-.5-1.8-.5-2.3.2-.5.7-.2 1.5.8 1.9l1.1.4c1 .4 1.3 1.2.8 1.9-.6.8-1.9.8-2.7.2' },
    { name: 'JavaScript', icon: 'M4 4h16v16H4V4zm6 7v4.5c0 1-.6 1.5-1.5 1.5-.6 0-1-.3-1.3-.7m7.8-4.8c-.6-.5-1.6-.5-2.1.2-.5.6-.2 1.4.7 1.8l1 .4c.9.4 1.2 1.1.7 1.8-.5.7-1.7.7-2.4.1' },
    { name: 'SQL / MySQL', icon: 'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zm8 6c0 1.7-3.6 3-8 3s-8-1.3-8-3m16 6c0 1.7-3.6 3-8 3s-8-1.3-8-3m0-6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6' },
    { name: 'Tailwind', icon: 'M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 1.9 1.4 1 1 2.1 2.1 4.6 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-1.9-1.4C15.6 7.1 14.5 6 12 6zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 1.9 1.4 1 1 2.1 2.1 4.6 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-1.9-1.4-1-1-2.1-2.1-4.6-2.1z' },
    { name: 'Bootstrap', icon: 'M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm4 4v8h4.5a2 2 0 0 0 0-4H9m0 0h4a1.8 1.8 0 0 0 0-3.6H9' },
    { name: 'HTML5', icon: 'M4 3l1.5 16L12 21l6.5-2L20 3H4zm12 5H8.5l.3 3.5h6.9l-.6 5-3.1.9-3.1-.9-.2-2' },
    { name: 'CSS3', icon: 'M4 3l1.5 16L12 21l6.5-2L20 3H4zm4 5h8l-.4 3.5H9.5m6.1 0l-.5 5-3.1.9-3.1-.9-.2-2' },
    { name: 'CLP', icon: 'M4 6h16v12H4V6zm4-3v3m4-3v3m4-3v3M8 18v3m4-3v3m4-3v3M8 10h8v4H8v-4z' },
    { name: 'Raspberry Pi', icon: 'M12 7c2.8 0 5 2.2 5 5 0 3.3-2.2 6-5 6s-5-2.7-5-6c0-2.8 2.2-5 5-5zm0 0c-1-2-3-3-4-2m4 2c1-2 3-3 4-2' },
    { name: 'IoT', icon: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M8.5 8.5a5 5 0 0 1 7 0M5.5 5.5a9.5 9.5 0 0 1 13 0M8.5 15.5a5 5 0 0 0 7 0' },
    { name: 'Automação Industrial', icon: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-5v2m0 14v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M3 12h2m14 0h2M4.9 19.1l1.4-1.4m11.4-11.4l1.4-1.4' },
    { name: 'Comandos Elétricos', icon: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z' },
    { name: 'VBA / Excel', icon: 'M4 4h16v16H4V4zm4 5l6 6m0-6l-6 6' }
  ];

  ngAfterViewInit(): void {
    this.initHeroSky();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.resizeHandler);
    const wrap = this.heroWrapper?.nativeElement;
    if (wrap) {
      wrap.removeEventListener('mousemove', this.mouseMoveHandler);
      wrap.removeEventListener('mouseleave', this.mouseLeaveHandler);
    }
  }

  private resizeCanvas(): void {
    const wrap = this.heroWrapper?.nativeElement;
    const canvas = this.heroSkyCanvas?.nativeElement;
    if (!wrap || !canvas) return;
    canvas.width = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
  }

  private hexToRgb(hex: string): [number, number, number] {
    const clean = hex.trim().replace('#', '');
    const num = parseInt(clean, 16);
    if (Number.isNaN(num)) return [59, 130, 246];
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }

  private initHeroSky(): void {
    const wrap = this.heroWrapper?.nativeElement;
    const canvas = this.heroSkyCanvas?.nativeElement;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeHandler);
    wrap.addEventListener('mousemove', this.mouseMoveHandler);
    wrap.addEventListener('mouseleave', this.mouseLeaveHandler);

    const connectDist = 130;
    const nodes: SkyNode[] = Array.from({ length: 88 }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: Math.random() * (canvas.height || 800),
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.4 + 0.9,
      isAccent: Math.random() < 0.18
    }));

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      const styles = getComputedStyle(document.documentElement);
      const [ar, ag, ab] = this.hexToRgb(styles.getPropertyValue('--accent') || '#3B82F6');
      const [nr, ng, nb] = this.hexToRgb(styles.getPropertyValue('--text-secondary') || '#A1A1AA');
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const lineBoost = isDark ? 1 : 0.75;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent
          ? `rgba(${ar},${ag},${ab},0.88)`
          : `rgba(${nr},${ng},${nb},${isDark ? 0.58 : 0.48})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.24 * lineBoost;
            const useAccent = p.isAccent || q.isAccent;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = useAccent
              ? `rgba(${ar},${ag},${ab},${alpha * 1.15})`
              : `rgba(${nr},${ng},${nb},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (this.mouse.x !== null && this.mouse.y !== null) {
          const mdist = Math.hypot(p.x - this.mouse.x, p.y - this.mouse.y);
          if (mdist < this.mouse.radius) {
            const mAlpha = (1 - mdist / this.mouse.radius) * 0.48 * lineBoost;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(this.mouse.x, this.mouse.y);
            ctx.strokeStyle = `rgba(${ar},${ag},${ab},${mAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }
}
