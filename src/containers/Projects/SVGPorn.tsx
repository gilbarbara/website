import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import Image from 'next/image';

import { useAppContext } from '~/modules/context';

import { projectImageDimensions } from '~/config';

import ImageLink from '~/components/ImageLink';

export default function SVGPorn(): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();

  const name = 'SVG Porn';
  const url = 'https://svgporn.com';

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
        <Paragraph bold>Vector logos for the tech industry</Paragraph>
        <Paragraph mt="xs">
          Browse, search and filter all the logos from{' '}
          <Anchor external href="https://github.com/gilbarbara/logos">
            github.com/gilbarbara/logos
          </Anchor>
        </Paragraph>
      </Box>
    </Box>
  );
}
