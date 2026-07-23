import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    careerJourneys = [
        {
            title: 'Jornada de Evolução Profissional',
            company: 'Daten Tecnologia - Carreira Industrial',
            period: '2018 - Atualmente',
            isEvolution: true,
            steps: [
                {
                    period: '2023 - Atualmente',
                    role: 'Supervisor de Produção',
                    description: 'Liderança estratégica de equipes, gestão de indicadores (KPIs) e condução de iniciativas de melhoria contínua (Lean Manufacturing), informatização de processos e automação da planta industrial.',
                    skills: ['Liderança', 'Lean', 'KPIs', 'Desenvolvimento', 'Inovação']
                },
                {
                    period: '2021 - 2023',
                    role: 'Assistente de PCP',
                    description: 'Planejamento estratégico de ordens de produção, pedidos de venda e controle de fluxo industrial.',
                    skills: ['Planejamento', 'ERP', 'Dados']
                },
                {
                    period: '2019 - 2021',
                    role: 'Auxiliar de PCP',
                    description: 'Monitoramento de cronogramas, suporte ao controle de materiais e criação de pedidos de venda.',
                    skills: ['Processos', 'Monitoramento', 'Criatividade']
                },
                {
                    period: '2018 - 2019',
                    role: 'Montador',
                    description: 'tuação técnica direta nos processos da linha de produção e na área de testes.',
                    skills: ['Qualidade', 'Operação']
                }
            ]
        },
        {
            title: 'Início de Carreira',
            company: 'Daten Tecnologia - Aprendizado Industrial',
            period: '2017 - 2018',
            isEvolution: false,
            steps: [
                {
                    period: '2017 - 2018',
                    role: 'Aprendiz / Auxiliar de Produção',
                    description: 'Primeiro contato com rotinas de fabricação e organização industrial.',
                    skills: ['Aprendizado', 'Proatividade']
                }
            ]
        }
    ];
}
