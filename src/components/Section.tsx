import { ComponentProps, ReactNode } from 'react';
import { Main } from '@gilbarbara/components';

import { useAppContext } from '~/modules/context';

interface Props extends ComponentProps<typeof Main> {
  children: ReactNode;
}

export default function Section(props: Props): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();

  return (
    <Main
      as="section"
      centered
      minHeight="70vh"
      px={isMobile ? 'xl' : 'jumbo'}
      py="jumbo"
      {...props}
    />
  );
}
