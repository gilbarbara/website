import { cn } from '@heroui/react';

import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';

interface ExperienceEntry {
  company: string;
  description?: string;
  period: string;
  role: string;
  subProjects?: SubProject[];
}

interface SubProject {
  description: string;
  name: string;
}

const entries: ExperienceEntry[] = [
  {
    company: 'WebRTC.ventures',
    role: 'Senior Software Engineer',
    period: '02/2025 – 02/2026',
    subProjects: [
      {
        name: 'AI Agent Platform',
        description:
          'Real-time system embedding LLM-powered agents into meetings using WebRTC, SSE, and STT/TTS. Integrated multi-model LLMs and RAG workflows for real-time and post-processing interactions.',
      },
      {
        name: 'Satellite Communication System',
        description:
          'Distributed system for communication in constrained environments. Built observability with OpenTelemetry and end-to-end encryption using the Signal Protocol.',
      },
      {
        name: 'AI Engineering Platform',
        description:
          'Code intelligence system using AST parsing and hybrid graph + vector search. Designed multi-tenant architecture and restructured monorepo and CI for maintainability.',
      },
    ],
  },
  {
    company: 'Zenhub',
    role: 'Senior Front-end Engineer',
    period: '09/2022 – 09/2023',
    description:
      'Worked on a major re-platforming effort and modular TypeScript architecture. Also built AI-powered issue tagging and feature exploration tools.',
  },
  {
    company: 'INTERA',
    role: 'Tech Lead',
    period: '03/2021 – 04/2022',
    description:
      'Led architecture and development of a multi-tenant serverless SaaS platform on AWS. Built a React web app and Chrome extension, and migrated microservices to TypeScript.',
  },
  {
    company: 'AMARO',
    role: 'Tech Lead Front-end',
    period: '09/2016 – 11/2020',
    description:
      'Led frontend architecture for a React PWA and a large TypeScript migration. Focused on performance, maintainability, and development speed.',
  },
  {
    company: 'Vérios Investimentos',
    role: 'Front-end Developer',
    period: '12/2014 – 08/2016',
    description:
      "Built Brazil's first robo-advisor frontend using React, D3, and Web Workers. Ported R-based algorithms to JavaScript for real-time cross-device execution.",
  },
  {
    company: 'Early Career',
    role: 'CTO / Independent Consultant',
    period: '1997 – 2018',
    description:
      'Scaled platforms at RRAURL and delivered dozens of systems through Kollectiv. Worked across architecture, infrastructure, and high-traffic web applications.',
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-12">
        {entries.map(entry => (
          <div key={entry.company}>
            <h3
              className={cn('text-xl font-bold', {
                'text-3xl': entry.company === 'WebRTC.ventures',
                'text-foreground-700': entry.company !== 'WebRTC.ventures',
              })}
            >
              {entry.company}
            </h3>
            <p
              className={cn('text-sm text-foreground-500 mb-3', {
                'text-md': entry.company === 'WebRTC.ventures',
              })}
            >
              {entry.role} · {entry.period}
            </p>
            {entry.description && <p>{entry.description}</p>}
            {entry.subProjects && (
              <div className="mt-4 space-y-4">
                {entry.subProjects.map(project => (
                  <div key={project.name}>
                    <p className="text-lg font-semibold">{project.name}</p>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
