import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-8 text-3xl font-bold text-primary">{children}</h2>;
}
