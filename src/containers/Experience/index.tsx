import { Tab, Tabs } from '@gilbarbara/components';

import { useAppContext } from 'modules/context';

import Block from 'components/Block';
import Section from 'components/Section';
import Amaro from 'containers/Experience/Amaro';
import Intera from 'containers/Experience/Intera';
import Kollectiv from 'containers/Experience/Kollectiv';
import Rraurl from 'containers/Experience/Rraurl';
import Verios from 'containers/Experience/Verios';

export default function Experience(): JSX.Element {
  const {
    state: { isMobile },
  } = useAppContext();

  return (
    <Section data-component-name="experience">
      <Block title="Experience">
        <Tabs
          key={isMobile.toString()}
          direction={isMobile ? 'vertical' : 'horizontal'}
          minHeight={280}
        >
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
