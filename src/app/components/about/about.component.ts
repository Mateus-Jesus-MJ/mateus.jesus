import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}
