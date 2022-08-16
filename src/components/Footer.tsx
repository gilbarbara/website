import { Anchor, Box, Icon, Paragraph, Spacer } from '@gilbarbara/components';

import { useAppContext } from '~/modules/context';
import { getFilterStyles } from '~/modules/theme';

export default function Footer(): JSX.Element {
  const {
    state: { isMobile, showMenu },
  } = useAppContext();

  let links = (
    <Spacer
      data-component-name="FooterLinks"
      direction={isMobile ? 'horizontal' : 'vertical'}
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

  links = isMobile ? (
    <Box align="center" display="flex" justify="center" mb="md">
      {links}
    </Box>
  ) : (
    <Box bottom={32} data-component-name="Footer" left={32} padding="sm" position="fixed">
      {links}
    </Box>
  );

  return (
    <Box data-component-name="Footer" mt="xxl" pb="xl" style={getFilterStyles(showMenu)}>
      {links}

      <Paragraph align="center" size="mid">
        Built by Gil Barbara
      </Paragraph>
    </Box>
  );
}
