import styled from '@emotion/styled';
import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import image from 'media/svgporn.jpg';

import { theme } from 'modules/theme';

const Wrapper = styled(Box)`
  img {
    max-width: 440px;
    margin-right: ${theme.spacing.md};
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      display: block;
      margin-bottom: ${theme.spacing.md};
      margin-right: 0;
      max-width: 100%;
    }
  }
`;

export default function SVGPorn(): JSX.Element {
  const url = 'https://svgporn.com';

  return (
    <Wrapper flexBox>
      <Anchor external href={url}>
        <img alt="SVG Porn" src={image} />
      </Anchor>
      <Box>
        <H3>
          <Anchor external href={url}>
            SVG Porn
          </Anchor>
        </H3>
        <Paragraph bold>Vector logos for the tech industry</Paragraph>
        <Paragraph mt="xs">
          Browse, search and filter all the logos from{' '}
          <Anchor external href="https://github.com/gilbarbara/logos">
            github.com/gilbarbara/logos
          </Anchor>
        </Paragraph>
      </Box>
    </Wrapper>
  );
}
