import { useWindowSize } from 'react-use';
import { Anchor, Box, Icon, Paragraph, Spacer } from '@gilbarbara/components';

import { useAppContext } from 'modules/context';

export default function Footer(): JSX.Element {
  const { state } = useAppContext();
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  let links = (
    <Spacer
      data-component-name="FooterLinks"
      direction={isLargeScreen ? 'vertical' : 'horizontal'}
      gap="md"
    >
      <Anchor external href="https://github.com/gilbarbara" shade="lightest">
        <Icon name="github" size={24} />
      </Anchor>
      <Anchor external href="https://twitter.com/gilbarbara" shade="lightest">
        <Icon name="twitter" size={24} />
      </Anchor>
      <Anchor external href="https://codesandbox.io/u/gilbarbara" shade="lightest">
        <Icon name="codesandbox" size={24} />
      </Anchor>
      <Anchor external href="https://www.linkedin.com/in/gilbarbara/" shade="lightest">
        <Icon name="linkedin" size={24} />
      </Anchor>
    </Spacer>
  );

  links = isLargeScreen ? (
    <Box bottom={32} data-component-name="Footer" left={32} padding="sm" position="fixed">
      {links}
    </Box>
  ) : (
    <Box align="center" display="flex" justify="center" mb="md">
      {links}
    </Box>
  );

  return (
    <Box
      data-component-name="Footer"
      mt="xxl"
      pb="xl"
      style={{ filter: !isLargeScreen ? `blur(${state.showMenu ? '3px' : '0'})` : undefined }}
    >
      {links}

      <Paragraph align="center">Built by Gil Barbara</Paragraph>
    </Box>
  );
}
