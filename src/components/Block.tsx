import { ReactNode } from 'react';
import { Box, BoxProps, H2 } from '@gilbarbara/components';

interface Props extends Omit<BoxProps, 'title'> {
  children: ReactNode;
  title: ReactNode;
}

export default function Block(props: Props): JSX.Element {
  const { children, title, ...rest } = props;

  return (
    <Box data-component-name="Block" maxWidth={800} textAlign="left" width="100%" {...rest}>
      <H2 mb="xl" variant="primary">
        {title}
      </H2>
      {children}
    </Box>
  );
}
