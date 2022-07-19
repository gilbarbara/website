import React from 'react';
import { Anchor, Button, Main, NonIdealState } from '@gilbarbara/components';

import Footer from 'components/Footer';
import Logo from 'components/Logo';

export default function NotFound(): JSX.Element {
  return (
    <Main justify="space-between">
      <Logo />
      <NonIdealState type="not-found">
        <Anchor hideDecoration href="/">
          <Button invert>Go to the home page</Button>
        </Anchor>
      </NonIdealState>
      <Footer />
    </Main>
  );
}
