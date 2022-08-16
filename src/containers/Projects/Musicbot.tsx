import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import Image from 'next/image';

import { useAppContext } from '~/modules/context';

import { projectImageDimensions } from '~/config';

import ImageLink from '~/components/ImageLink';

export default function Musicbot(): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();

  const name = 'Musicbot';
  const url = 'https://musicbot.io/';

  return (
    <Box direction={isMobile ? 'column' : 'row'} flexBox>
      <ImageLink align="left" name={name} url={url}>
        <Image
          alt={name}
          layout="responsive"
          src="/media/musicbot.jpg"
          {...projectImageDimensions}
        />
      </ImageLink>
      <Box>
        <H3>
          <Anchor external href={url}>
            {name}
          </Anchor>
        </H3>
        <Paragraph bold>Create awesome playlists with Spotify</Paragraph>
        <Paragraph mt="xs">
          Select one or more tracks, change the parameters and generate a playlist.
        </Paragraph>
      </Box>
    </Box>
  );
}
