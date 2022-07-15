import { ReactNode } from 'react';
import { Box, H4, Paragraph } from '@gilbarbara/components';

interface Props {
  period: ReactNode;
  title: ReactNode;
}

export default function ExperienceHeading({ period, title }: Props): JSX.Element {
  return (
    <Box data-component-name="TabHeading" mb="md">
      <H4 mb="xxs">{title}</H4>
      <Paragraph shade="lighter" variant="primary">
        {period}
      </Paragraph>
    </Box>
  );
}
