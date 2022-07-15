import { useWindowSize } from 'react-use';
import { Anchor, Box, Paragraph } from '@gilbarbara/components';

import Block from 'components/Block';
import Section from 'components/Section';

export default function About(): JSX.Element {
  const { width } = useWindowSize();
  const isLarge = width >= 768;

  return (
    <Section data-component-name="about">
      <Block title="About Me">
        <Box align="start" direction={isLarge ? 'row' : 'column'} display="flex">
          <Box flex mb={isLarge ? undefined : 'xl'} mr={isLarge ? 'xl' : undefined}>
            <Paragraph size="large">
              Hello! My name is Gil Barbara, and I've been into coding since I was a little kid,
              writing my first script in Basic when I was seven years old on a TRS-80 Color
              Computer.
            </Paragraph>
            <Paragraph size="large">
              I started working with technology in the late 80s. I went through various areas, such
              as sound engineer, graphic designer, and system administrator, where I built a render
              farm system in C++ and a few Mac OS apps.
            </Paragraph>
            <Paragraph size="large">
              In 1995 I discovered the web, and soon I started programming in Perl, a little Java,
              PHP, and Ruby.
            </Paragraph>
            <Paragraph size="large">
              In the late 2000s, I started messing with node.js. Soon after, I began developing
              single-page applications with BackboneJS, AngularJS, and React.
            </Paragraph>
            <Paragraph size="large">
              I maintain over 30{' '}
              <Anchor external href="https://www.npmjs.com/~gilbarbara">
                open-source libraries
              </Anchor>{' '}
              with over 40 million downloads/year and often collaborate with other projects.
            </Paragraph>
            <Paragraph size="large">
              My main hobby is music, I've been a DJ since 1987, and I've always created related
              tools and thousands of playlists.
            </Paragraph>
          </Box>

          <Box mx="auto">
            <img
              alt="Gil Barbara"
              src="https://gilbarbara.dev/files/profile-1.jpg"
              style={{ borderRadius: '50%' }}
              width="192"
            />
          </Box>
        </Box>
      </Block>
    </Section>
  );
}
