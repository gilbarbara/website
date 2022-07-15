import styled from '@emotion/styled';
import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import image from 'media/colormeup.jpg';

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

export default function Colormeup(): JSX.Element {
  const url = 'https://colormeup.co/';

  return (
    <Wrapper flexBox>
      <Box>
        <H3>
          <Anchor external href={url}>
            Colormeup
          </Anchor>
        </H3>
        <Paragraph bold>Inspect colors and generate palettes</Paragraph>
        <Paragraph mt="xs">Know your colors!</Paragraph>
      </Box>
      <Anchor external href={url}>
        <img alt="Colormeup" src={image} />
      </Anchor>
    </Wrapper>
  );
}
