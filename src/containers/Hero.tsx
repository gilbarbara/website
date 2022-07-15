import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { Box, H1, H2, Jumbo } from '@gilbarbara/components';

import Bubble from 'components/Bubble';
import Section from 'components/Section';

export default function Hero(): JSX.Element {
  const { height, width } = useWindowSize(1024, 768);
  const [size, setSize] = useState(height * 0.7);
  const isLarge = width >= 768;

  useEffect(() => {
    setSize(width > height ? height * 0.8 : width * 0.8);
  }, [height, width]);

  const description =
    "I'm a software engineer with over 30 years of experience and a solid background in web development, microservices, and APIs.";

  return (
    <Section data-component-name="hero" minHeight="100vh" pt={isLarge ? 'xl' : 'md'}>
      <Box height="100vh" position="absolute">
        <Bubble
          size={size}
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </Box>
      {isLarge ? <Jumbo>Gil Barbara</Jumbo> : <H1>Gil Barbara</H1>}
      <Box maxWidth={680} textAlign="center" width="100%">
        <H2 style={{ fontSize: isLarge ? undefined : 22 }}>{description}</H2>
      </Box>
    </Section>
  );
}
