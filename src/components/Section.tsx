import { ComponentProps, ReactNode } from 'react';
import { useWindowSize } from 'react-use';
import { Main } from '@gilbarbara/components';

interface Props extends ComponentProps<typeof Main> {
  children: ReactNode;
}

export default function Section(props: Props): JSX.Element {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  return (
    <Main
      as="section"
      centered
      minHeight="70vh"
      px={isDesktop ? 'jumbo' : 'xl'}
      py="jumbo"
      {...props}
    />
  );
}
