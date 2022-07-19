import { ReactNode } from 'react';
import { Icon, Spacer, Text } from '@gilbarbara/components';

interface Props {
  children: ReactNode;
}

export default function ExperienceItem({ children }: Props): JSX.Element {
  return (
    <Spacer mb="md" verticalAlign="start" wrap={false}>
      <Icon name="shape-rhombus" size={16} style={{ marginTop: 2 }} variant="primary" />
      <Text>{children}</Text>
    </Spacer>
  );
}
