import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <div className="space-y-4 text-lg">
        <p>
          I'm a software engineer with a background in physics and over 30 years of experience
          building systems across web, backend, and infrastructure.
        </p>
        <p>
          I care about understanding how things work — from distributed systems to color perception
          — and tend to focus on depth over breadth.
        </p>
        <p>
          Outside of engineering, I've been involved with music for decades, which still influences
          how I think about systems, structure, and timing.
        </p>
      </div>
    </Section>
  );
}
