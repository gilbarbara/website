'use client';

import { Link } from '@heroui/react';
import Image from 'next/image';

import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';

interface Project {
  description: string;
  href: string;
  image: string;
  name: string;
}

const projects: Project[] = [
  {
    name: 'React Joyride',
    description:
      'Widely adopted guided tour library for React used in production across thousands of applications.',
    href: 'https://github.com/gilbarbara/react-joyride',
    image: '/media/react-joyride.png',
  },
  {
    name: 'ColorMeUp LAB',
    description: 'Interactive color scale and palette builder focused on perceptual color systems.',
    href: 'https://lab.colormeup.co',
    image: '/media/colormeup-lab.png',
  },
  {
    name: 'SVG Logos',
    description:
      'Curated collection of thousands SVG logos used in developer tools and applications.',
    href: 'https://svglogos.dev',
    image: '/media/svglogos.png',
  },
  {
    name: 'Agent Hub MCP',
    description:
      'Model Context Protocol server enabling multi-agent orchestration and shared context.',
    href: 'https://github.com/gilbarbara/agent-hub-mcp',
    image: '/media/agent-hub-mcp.png',
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col gap-12">
        {projects.map(project => (
          <div key={project.name} className="flex flex-col md:flex-row gap-4">
            <Link
              className="block w-full md:w-2/5 shrink-0 overflow-hidden rounded-lg"
              href={project.href}
              isExternal
            >
              <Image
                alt={project.name}
                className="w-full"
                height={630}
                src={project.image}
                width={1200}
              />
            </Link>
            <div>
              <h3 className="mb-2">
                <Link className="text-xl font-semibold underline" href={project.href} isExternal>
                  {project.name}
                </Link>
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
