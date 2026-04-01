import { ReactNode } from 'react';
import { cn } from '@heroui/react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  id: string;
}

export default function Section(props: SectionProps) {
  const { children, className, fullHeight, id } = props;

  return (
    <section
      className={cn('flex flex-col justify-center px-4 md:px-8 py-16 md:py-32', className, {
        'min-h-[calc(100dvh-4rem)]': fullHeight,
      })}
      id={id}
    >
      <div className="w-full max-w-3xl mx-auto ">{children}</div>
    </section>
  );
}
