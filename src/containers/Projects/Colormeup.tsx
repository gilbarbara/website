import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import Image from 'next/image';

import { useAppContext } from '~/modules/context';

import { projectImageDimensions } from '~/config';

import ImageLink from '~/components/ImageLink';

export default function Colormeup(): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();

  const name = 'ColorMeUp';
  const url = 'https://colormeup.co/';

  return (
    <Box direction={isMobile ? 'column' : 'row'} flexBox>
      <Box data-component-name="Content" order={isMobile ? 2 : 0}>
        <H3>
          <Anchor external href={url}>
            {name}
          </Anchor>
        </H3>
        <Paragraph bold>Inspect colors and generate palettes</Paragraph>
        <Paragraph mt="xs">Know your colors!</Paragraph>
      </Box>
      <ImageLink align="right" name={name} url={url}>
        <Image
          alt={name}
          layout="responsive"
          src="/media/colormeup.jpg"
          {...projectImageDimensions}
        />
      </ImageLink>
    </Box>
  );
}
