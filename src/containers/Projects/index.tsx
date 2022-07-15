import { Spacer } from '@gilbarbara/components';

import Block from 'components/Block';
import Section from 'components/Section';
import Colormeup from 'containers/Projects/Colormeup';
import Joyride from 'containers/Projects/Joyride';
import Musicbot from 'containers/Projects/Musicbot';
import SVGPorn from 'containers/Projects/SVGPorn';

export default function Projects(): JSX.Element {
  return (
    <Section data-component-name="projects">
      <Block title="Projects">
        <Spacer direction="vertical" gap="xxl">
          <Musicbot />
          <Colormeup />
          <SVGPorn />
          <Joyride />
        </Spacer>
      </Block>
    </Section>
  );
}
