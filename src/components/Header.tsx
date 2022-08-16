import { MouseEvent } from 'react';
import { Anchor, Box, BoxCenter, Button, ButtonBase, Icon, Spacer } from '@gilbarbara/components';

import { useAppContext } from '~/modules/context';
import { darkColor } from '~/modules/theme';

import Logo from '~/components/Logo';

export default function Header(): JSX.Element {
  const {
    setAppState,
    state: { isMobile, showMenu },
  } = useAppContext();

  const handleClickLogo = () => {
    document.location.hash = 'hero';
  };

  const handleClickMenuToggle = () => {
    setAppState(s => ({ showMenu: !s.showMenu }));
  };

  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;

    if (id) {
      document.location.hash = id;
    }

    if (showMenu) {
      setAppState({ showMenu: false });
    }
  };

  let menu = (
    <Spacer direction={isMobile ? 'vertical' : 'horizontal'}>
      <ButtonBase data-id="about" onClick={handleClickMenu} variant="white">
        About
      </ButtonBase>
      <ButtonBase data-id="experience" onClick={handleClickMenu} variant="white">
        Experience
      </ButtonBase>
      <ButtonBase data-id="projects" onClick={handleClickMenu} variant="white">
        Projects
      </ButtonBase>
      <ButtonBase data-id="contact" onClick={handleClickMenu} variant="white">
        Contact
      </ButtonBase>
      <Anchor external hideDecoration href="https://files.gilbarbara.dev/media/resume-en.pdf">
        <Button invert shade="mid" size="sm" variant="white">
          Resume
        </Button>
      </Anchor>
    </Spacer>
  );

  if (isMobile) {
    menu = (
      <>
        <ButtonBase
          aria-label={showMenu ? 'Hide menu' : 'Show menu'}
          onClick={handleClickMenuToggle}
          style={{ position: 'relative', zIndex: 100 }}
        >
          <Icon name={showMenu ? 'close' : 'menu-right-alt'} size={40} variant="primary" />
        </ButtonBase>
        <BoxCenter
          minHeight="100vh"
          padding="md"
          position="absolute"
          right={0}
          style={{ backgroundColor: darkColor }}
          top={0}
          transform={showMenu ? 'translateX(0%)' : 'translateX(140%)'}
          transition="transform 0.4s"
          width={240}
        >
          {menu}
        </BoxCenter>
      </>
    );
  }

  return (
    <Box
      align="center"
      data-component-name="Header"
      display="flex"
      left={0}
      minHeight={80}
      position="fixed"
      px="xl"
      py="md"
      right={0}
      style={{ backgroundColor: darkColor }}
      top={0}
      zIndex={100}
    >
      <Spacer distribution="space-between" fill>
        <ButtonBase aria-label="View the Hero" onClick={handleClickLogo}>
          <Logo />
        </ButtonBase>
        {menu}
      </Spacer>
    </Box>
  );
}
