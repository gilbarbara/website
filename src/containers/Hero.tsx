import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import { Box, H1, H2, Jumbo } from '@gilbarbara/components';

import { useAppContext } from '~/modules/context';

import Bubble from '~/components/Bubble';
import Section from '~/components/Section';

export default function Hero(): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();
  const isMounted = useRef(false);
  const { height, width } = useWindowSize(1024, 768);
  const [size, setSize] = useState(height * 0.7);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setSize(width > height ? height * 0.8 : width * 0.8);
  }, [height, width]);

  const description =
    "I'm a software engineer with over 30 years of experience and a solid background in web development, microservices, and APIs.";

  return (
    <Section data-component-name="hero" minHeight="100vh" pt={isMobile ? 'md' : 'xl'}>
      <Box height="100vh" position="absolute">
        {isMounted.current && (
          <Bubble
            size={size}
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          />
        )}
      </Box>
      {isMobile ? <H1>Gil Barbara</H1> : <Jumbo>Gil Barbara</Jumbo>}
      <Box maxWidth={680} textAlign="center" width="100%">
        <H2 style={{ fontSize: isMobile ? 22 : undefined }}>{description}</H2>
      </Box>
    </Section>
  );
}
