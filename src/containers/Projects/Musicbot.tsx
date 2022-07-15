import styled from '@emotion/styled';
import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import image from 'media/musicbot.jpg';

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

export default function Musicbot(): JSX.Element {
  const url = 'https://musicbot.io/';

  return (
    <Wrapper flexBox>
      <Anchor external href={url}>
        <img alt="Musicbot" src={image} />
      </Anchor>
      <Box>
        <H3>
          <Anchor external href={url}>
            Musicbot
          </Anchor>
        </H3>
        <Paragraph bold>Create awesome playlists with Spotify</Paragraph>
        <Paragraph mt="xs">
          Select one or more tracks, change the parameters and generate a playlist.
        </Paragraph>
      </Box>
    </Wrapper>
  );
}
