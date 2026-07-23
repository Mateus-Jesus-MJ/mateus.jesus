import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualifications.html',
  styleUrl: './qualifications.css'
})
export class QualificationsComponent {
  categories = [
    {
      name: 'Gestão Industrial & Qualidade',
      icon: 'industrial',
      courses: [
        { title: 'Lean manufacturing', provider: 'Senai-Cimatec' },
        { title: 'Introdução ao Lean Six Sigma (Chancela Internacional)', provider: 'FC Consult' },
        { title: 'Yellow Belt na Metodologia Lean Six Sigma', provider: 'FC Consult' },
        { title: 'Formação de Auditores Internos - ABNT NBR ISO 19011:2018', provider: 'FC Consult' },
        { title: 'Gestão Integrada - Normas ISO 9001, 14001 e 45001', provider: 'FC Consult' },
        { title: 'Gestão Integrada - Norma ISO 37001:2025', provider: 'FC Consult' },
        { title: 'Gestão Integrada - Norma ISO IEC 27001:2022', provider: 'FC Consult' },
        { title: 'Proteção e Privacidade de Dados Pessoais - ABNT PE 451.01', provider: 'FC Consult' },
        { title: 'Gestão da Inovação - ISO 56002:2019 e NP 4457:2021', provider: 'FC Consult' },
        { title: 'Formação de Auditores de ESD', provider: 'New Horizon' }
      ]
    },
    {
      name: 'Tecnologia & Desenvolvimento',
      icon: 'code',
      courses: [
        { title: 'Full-Stack - .NET Web API e Angular + EF Core', provider: 'Udemy' },
        { title: 'C# Completo - Programação Orientada a Objetos', provider: 'Udemy' },
        { title: 'Desenvolvimento WEB Completo', provider: 'Udemy' },
        { title: 'PHP 7 - Curso Completo', provider: 'Udemy' },
        { title: 'JavaScript & CSS & HTML5', provider: 'Udemy' },
        { title: 'Análise de Dados - Microsoft Power BI', provider: 'Fundação Bradesco' },
        { title: 'Montagem e Manutenção de Micros e Notebooks', provider: 'Microlins' },
        { title: 'Redes e Design Gráfico', provider: 'Microlins' },
        { title: 'Gestão de Projetos', provider: 'Fundação Bradesco' }
      ]
    },
    {
      name: 'Liderança & Desenvolvimento Humano',
      icon: 'people',
      courses: [
        { title: 'Liderança e Gestão de Equipes 4.0', provider: 'Udemy' },
        { title: 'Da Tarefa à Motivação - Propósito e Engajamento', provider: 'PUCRS' },
        { title: 'Comunicação Não Violenta, Empatia e Cooperação', provider: 'PUCRS' },
        { title: 'Liderança: Como Construir Relações Saudáveis', provider: 'Udemy' },
        { title: 'Introdução ao Tema Liderança', provider: 'FGV' },
        { title: 'Comunicação Empresarial', provider: 'Fundação Bradesco' },
        { title: 'Postura e Imagem Profissional', provider: 'Fundação Bradesco' }
      ]
    },
    {
      name: 'Finanças & Negócios',
      icon: 'finance',
      courses: [
        { title: 'Fundamentos de Finanças', provider: 'FGV' },
        { title: 'Fundamentos da Gestão de Custos', provider: 'FGV' },
        { title: 'Conceitos Básicos de Matemática Financeira', provider: 'FGV' },
        { title: 'Apresentação do Sistema Tributário Nacional', provider: 'FGV' }
      ]
    },
    {
      name: 'Ferramentas & Outros',
      icon: 'tools',
      courses: [
        { title: 'Domínio de VBA, Excel e Ferramentas Office', provider: 'Especialista' },
        { title: 'Ferramentas Google e Workspace', provider: 'Especialista' },
        { title: 'Operador de Máquinas Pesadas - Retroescavadeira', provider: 'MVB' }
      ]
    }
  ];
}
