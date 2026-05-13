import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    description: string;
    tags: string[];
    features: string[];
    icon?: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            title: 'Portaria Industrial',
            description: 'Sistema de controle de acesso robusto para ambientes industriais com alta rastreabilidade.',
            tags: ['Laravel', 'Blade', 'MySQL'],
            features: ['Controle de Horario Excedente', 'Controle de Veículos', 'Gestão de Visitantes', 'Controle de acesso de terceiros', 'Rastreabilidade de Materiais', 'Integração com Hardware'],
            icon: 'M3 21h18M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M5 7h14M5 21V7m14 14V7m-7 14v-8'
        },
        {
            title: 'Instruções de Trabalho',
            description: 'Digitalização e gestão documental de processos industriais, eliminando papel e aumentando o controle. Garanta também a comunicação em tempo real entre supervisão e operação.',
            tags: ['Laravel', 'Blade', 'MySQL'],
            features: ['Gestão Documental', 'Rastreamento de Leitura', 'Workflows Industriais', 'Controle de Versões'],
            icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
        },
        {
            title: 'Gestão de Inventario',
            description: 'Solução mobile/web para otimização do processo de inventário e contagem de estoque.',
            tags: ['Angular', 'TypeScript', 'SQL Server'],
            features: ['Abertura de Inventário', 'Relatorio de Contagem', 'Relatorio de Divergências', 'Dashboard de resultados', 'Dashboard de acompanhamento'],
            icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
        },
        {
            title: 'SGHSS - Gestão Hospitalar',
            description: 'Sistema completo para gestão de serviços de saúde e hospitais, com foco em telemedicina e controle de medicamentos.',
            tags: ['Angular', 'Firebase', 'Google Cloud'],
            features: ['Cadastro de Pacientes', 'Telemedicina', 'Gestão de Medicamentos', 'Gestão de Leitos e Internamentos', 'Dashboards Analíticos'],
            icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14h-4v-4H6v-4h4V6h4v4h4v4h-4v4z'
        }
    ];
}
