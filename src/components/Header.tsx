import { MouseEvent } from 'react';
import { useWindowSize } from 'react-use';
import { Box, BoxCenter, ButtonBase, Icon, Spacer } from '@gilbarbara/components';

import { useAppContext } from 'modules/context';
import { darkColor } from 'modules/theme';

import Logo from 'components/Logo';

export default function Header(): JSX.Element {
  const {
    setAppState,
    state: { showMenu },
  } = useAppContext();
  const { width } = useWindowSize();
  const isMobile = width < 768;

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
      <ButtonBase data-id="about" onClick={handleClickMenu} variant="primary">
        About
      </ButtonBase>
      <ButtonBase data-id="experience" onClick={handleClickMenu} variant="primary">
        Experience
      </ButtonBase>
      <ButtonBase data-id="projects" onClick={handleClickMenu} variant="primary">
        Projects
      </ButtonBase>
      <ButtonBase data-id="contact" onClick={handleClickMenu} variant="primary">
        Contact
      </ButtonBase>
    </Spacer>
  );

  if (isMobile) {
    menu = (
      <>
        <ButtonBase onClick={handleClickMenuToggle} style={{ position: 'relative', zIndex: 100 }}>
          <Icon name={showMenu ? 'close' : 'menu-right-alt'} size={40} variant="primary" />
        </ButtonBase>
        <BoxCenter
          minHeight="100vh"
          padding="md"
          position="absolute"
          right={0}
          shade="darkest"
          top={0}
          transform={showMenu ? 'translateX(0%)' : 'translateX(140%)'}
          transition="transform 0.4s"
          variant="gray"
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
        <ButtonBase onClick={handleClickLogo}>
          <Logo />
        </ButtonBase>
        {menu}
      </Spacer>
    </Box>
  );
}
