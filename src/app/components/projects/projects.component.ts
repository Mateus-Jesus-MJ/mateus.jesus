import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    description: string;
    tags: string[];
    features: string[];
    icon?: string;
    fullDescription?: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    selectedProject: Project | null = null;

    projects: Project[] = [
        {
            title: 'Portaria Industrial',
            description: 'Sistema de controle de acesso robusto para ambientes industriais com alta rastreabilidade.',
            fullDescription: `Solução desenvolvida para gerenciamento integrado do fluxo de entradas e saídas em ambiente industrial, com foco em segurança patrimonial, rastreabilidade e controle operacional. Centraliza o controle de acesso de colaboradores, visitantes, terceiros, transportadoras e motoristas, automatizando registros e aprovações conforme regras internas.

O sistema realiza o monitoramento de movimentação de materiais, gestão de veículos corporativos, controle de saídas de emergência e acompanhamento de conformidade ambiental, incluindo testes de emissões. Consolidando registros detalhados e trilhas de auditoria, transforma a portaria em um ponto estratégico para segurança, governança e inteligência operacional.`,
            tags: ['Laravel', 'Blade', 'MySQL'],
            features: ['Controle de entrada e saída de colaboradores em Horário Excedente', 'Controle de frota interna', 'Controle de motoristas e veículos externos',
                'Controle de acesso de visitantes e terceiros', 'Fluxo de aprovação multinível para acessos temporários',
                'Rastreabilidade de Materiais', 'Integração com Hardware', 'Geração de logs para auditoria'],
            icon: 'M3 21h18M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M5 7h14M5 21V7m14 14V7m-7 14v-8'
        },
        {
            title: 'Instruções de Trabalho',
            description: 'Digitalização e gestão documental de processos industriais, eliminando papel e aumentando o controle.',
            fullDescription: `Solução desenvolvida para digitalização dos processos operacionais no chão de fábrica, substituindo instruções impressas e controles manuais por uma plataforma integrada. Permite que os operadores acessem orientações de trabalho sem necessidade de interação direta com computador ou documentos físicos, garantindo maior foco na execução das atividades.

A ferramenta assegura padronização, rastreabilidade e conformidade dos processos produtivos, além de disponibilizar comunicação em tempo real entre supervisão e operadores, otimizando o fluxo de informações e a gestão operacional. Conta ainda com alertas automáticos para registros de falhas e acompanhamento de indicadores de produtividade, como metas, projeções e desempenho individual, contribuindo para maior controle e eficiência da operação.
            `,
            tags: ['Laravel', 'Blade', 'MySQL'],
            features: ['Gestão Documental', 'Feedbacks em tempo real', 'Controle de Falhas', 'Acompanhamento de Indicadores de Produtividade', 'Automação de Processos de Trabalho'],
            icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
        },
        {
            title: 'Gestão de Inventário',
            description: 'Solução mobile/web para otimização do processo de inventário e contagem de estoque.',
            fullDescription: 'Desenvolvido para agilizar o processo de auditoria de estoque. Com uma interface otimizada para dispositivos móveis, permite contagens rápidas, geração instantânea de divergências e dashboards para acompanhamento da acuracidade do inventário.',
            tags: ['Angular', 'TypeScript', 'SQL Server'],
            features: ['Abertura de Inventário', 'Relatório de Contagem', 'Relatório de Divergências', 'Dashboard de resultados', 'Dashboard de acompanhamento'],
            icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
        },
        {
            title: 'SGHSS - Gestão Hospitalar',
            description: 'Sistema completo para gestão de serviços de saúde e hospitais, com foco em telemedicina.',
            fullDescription: 'Plataforma integrada para gestão hospitalar moderna. Abrange desde o prontuário eletrônico do paciente até a telemedicina avançada, com módulos de controle rígido de farmácia, leitos e gestão administrativa complexa.',
            tags: ['Angular', 'Firebase', 'Google Cloud'],
            features: ['Cadastro de Pacientes', 'Telemedicina', 'Gestão de Medicamentos', 'Gestão de Leitos e Internamentos', 'Dashboards Analíticos'],
            icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14h-4v-4H6v-4h4V6h4v4h4v4h-4v4z'
        },
        {
            title: 'DUCKCORE',
            description: 'Sistema de solução integrada para automação de processos e mensageria.',
            fullDescription: `Solução Integrada de Automação de Mensageria e Orquestração de Processos.

O DuckCore é uma plataforma robusta desenvolvida em Node.js, projetada para preencher a lacuna entre a comunicação estratégica via WhatsApp e a execução técnica de scripts automatizados. 

A ferramenta atua como um centro de comando inteligente, um Dashboard de Controle de Missão, permitindo o gerenciamento de fluxos de informação e automações complexas em um único ecossistema.

O diferencial do DuckCore é a comunicação inteligente via WhatsApp, diferente de disparadores de mensagens comuns, o DuckCore utiliza tecnologia de emulação de Web Client para garantir uma integração fluida com o WhatsApp e sem a necessidade de pagamento extra por isso.

O DuckCore não é apenas um bot de mensagens, mas um orquestrador de produtividade. Ele une a facilidade de comunicação do WhatsApp com o poder de processamento do Python, oferecendo controle total sobre o fluxo de trabalho automatizado.
`,
            tags: ['Node.js', 'JSON', 'Python'],
            features: ['Automação de Processos', 'Mensageria WhatsApp & Telegram', 'Orquestração de Processos', 'Scripts Python Customizados', 'Coleta Inteligente de Dados'],
            icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
        }
    ];

    openProjectDetails(project: Project) {
        this.selectedProject = project;
        document.body.style.overflow = 'hidden';
    }

    closeProjectDetails() {
        this.selectedProject = null;
        document.body.style.overflow = '';
    }
}
