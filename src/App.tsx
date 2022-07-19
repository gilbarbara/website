import { useEffect } from 'react';
import { useLocation, useWindowSize } from 'react-use';
import { Box } from '@gilbarbara/components';

import { useAppContext } from 'modules/context';
import { getFilterStyles } from 'modules/theme';

import Footer from 'components/Footer';
import Header from 'components/Header';
import About from 'containers/About';
import Contact from 'containers/Contact';
import Experience from 'containers/Experience';
import Hero from 'containers/Hero';
import Projects from 'containers/Projects';

function App() {
  const { height, width } = useWindowSize();
  const { setAppState, state } = useAppContext();
  const { hash } = useLocation();

  useEffect(() => {
    setAppState({ isMobile: height > width });
  }, [height, setAppState, width]);

  useEffect(() => {
    if (!hash) {
      return;
    }

    const element = document.querySelector(`[data-component-name="${hash?.slice(1)}"]`);

    if (element) {
      window.scrollTo({ top: (element as HTMLElement).offsetTop, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <Header />
      <Box data-component-name="Main" style={getFilterStyles(state.showMenu)}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </>
  );
}

export default App;
