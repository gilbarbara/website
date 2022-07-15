import { useWindowSize } from 'react-use';
import { Tab, Tabs } from '@gilbarbara/components';

import Block from 'components/Block';
import Section from 'components/Section';
import Amaro from 'containers/Experience/Amaro';
import Intera from 'containers/Experience/Intera';
import Kollectiv from 'containers/Experience/Kollectiv';
import Rraurl from 'containers/Experience/Rraurl';
import Verios from 'containers/Experience/Verios';

export default function Experience(): JSX.Element {
  const { width } = useWindowSize();
  const isLarge = width >= 768;

  return (
    <Section data-component-name="experience">
      <Block title="Experience">
        <Tabs direction={isLarge ? 'horizontal' : 'vertical'} minHeight={280}>
          <Tab id="intera" title="Intera">
            <Intera />
          </Tab>
          <Tab id="amaro" title="AMARO">
            <Amaro />
          </Tab>
          <Tab id="verios" title="Vérios">
            <Verios />
          </Tab>
          <Tab id="kollectiv" title="Kollectiv">
            <Kollectiv />
          </Tab>
          <Tab id="rraurl" title="rraurl">
            <Rraurl />
          </Tab>
        </Tabs>
      </Block>
    </Section>
  );
}
