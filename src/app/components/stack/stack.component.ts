import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  stack = [
    { name: 'Angular (Standalone)', level: 95 },
    { name: 'TypeScript / JS', level: 90 },
    { name: '.NET (C#)', level: 85 },
    { name: 'Laravel (PHP)', level: 80 },
    { name: 'SQL Server / MySQL', level: 90 },
    { name: 'Bootstrap / Tailwind', level: 95 },
    { name: 'Chart.js / Analytics', level: 85 },
    { name: 'Git / CI/CD', level: 85 }
  ];

  badges = [
    'SaaS Multiempresa', 'Autenticação JWT', 'Arquitetura de Sistemas', 
    'Automação de Relatórios', 'Dashboards Industriais', 'Integração Operational',
    'Gestão Lean', 'Levantamento de Requisitos'
  ];
}
