import Section from '~/components/Section';

export default function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center" id="hero">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(255,0,68,0.2) 0%, transparent 50%)',
        }}
      />
      <div className="relative">
        <h1 className="text-5xl md:text-7xl font-bold">Gil Barbara</h1>
        <p className="text-xl md:text-3xl font-medium mt-2 ">Senior Software Engineer</p>
        <p className="max-w-3xl text-xl font-medium mt-6">
          I build scalable, distributed, and real-time systems across backend and frontend, focusing
          on reliability, security, and long-term maintainability.
        </p>
      </div>
    </Section>
  );
}
