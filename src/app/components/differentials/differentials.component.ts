import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-differentials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './differentials.component.html',
  styleUrl: './differentials.component.css'
})
export class DifferentialsComponent {
  differentials = [
    {
      title: 'Visão de Negócio',
      description: 'Foco no ROI e no valor que a tecnologia agrega ao negócio, não apenas no código.',
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    },
    {
      title: 'Desenvolvimento Corporativo',
      description: 'Experiência real em sistemas críticos de alta disponibilidade e segurança.',
      icon: 'M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1'
    },
    {
      title: 'Foco em Produtividade',
      description: 'Criação de ferramentas que eliminam tarefas repetitivas e aceleram o fluxo de trabalho.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
    },
    {
      title: 'Integração entre Áreas',
      description: 'Habilidade em conectar diferentes setores através de sistemas unificados e fluidos.',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m15-9.93a4 4 0 0 1 0 7.86m-2-7.86a4 4 0 0 1 0 7.86'
    },
    {
      title: 'Melhoria de Processos',
      description: 'Aplicação de metodologias Lean para otimizar a lógica de sistemas industriais.',
      icon: 'M22 12h-4l-3 9L9 3l-3 9H2'
    },
    {
      title: 'Levantamento de Requisitos',
      description: 'Comunicação assertiva para transformar necessidades em especificações técnicas precisas.',
      icon: 'M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
    }
  ];
}
