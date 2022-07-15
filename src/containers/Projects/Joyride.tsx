import styled from '@emotion/styled';
import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import image from 'media/react-joyride.jpg';

import { theme } from 'modules/theme';

const Wrapper = styled(Box)`
  img {
    max-width: 440px;
    margin-left: ${theme.spacing.md};
  }

  @media (max-width: 768px) {
    flex-direction: column;

    [data-component-name='Box'] {
      order: 2;
    }

    img {
      display: block;
      margin-bottom: ${theme.spacing.md};
      margin-left: 0;
      max-width: 100%;
    }
  }
`;

export default function Joyride(): JSX.Element {
  const url = 'https://react-joyride.com/';

  return (
    <Wrapper flexBox>
      <Box>
        <H3>
          <Anchor external href={url}>
            React Joyride
          </Anchor>
        </H3>
        <Paragraph bold>Create awesome tours for your app!</Paragraph>
        <Paragraph mt="xs">
          Showcase your app to new users or explain functionality of new features.
        </Paragraph>
      </Box>
      <Anchor external href={url}>
        <img alt="React Joyride" src={image} />
      </Anchor>
    </Wrapper>
  );
}
