import { Anchor, Box, H3, Paragraph } from '@gilbarbara/components';
import Image from 'next/image';

import { useAppContext } from 'modules/context';

import { projectImageDimensions } from 'config';

import ImageLink from 'components/ImageLink';

export default function Joyride(): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();

  const url = 'https://react-joyride.com/';
  const name = 'React Joyride';

  return (
    <Box direction={isMobile ? 'column' : 'row'} flexBox>
      <Box data-component-name="Content" order={isMobile ? 2 : 0}>
        <H3>
          <Anchor external href={url}>
            {name}
          </Anchor>
        </H3>
        <Paragraph bold>Create awesome tours for your app!</Paragraph>
        <Paragraph mt="xs">
          Showcase your app to new users or explain functionality of new features.
        </Paragraph>
      </Box>
      <ImageLink align="left" name={name} url={url}>
        <Image
          alt={name}
          layout="responsive"
          src="/media/react-joyride.jpg"
          {...projectImageDimensions}
        />
      </ImageLink>
    </Box>
  );
}
