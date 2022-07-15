import { useEffect } from 'react';
import { useLocation } from 'react-use';
import { Box } from '@gilbarbara/components';

import { useAppContext } from 'modules/context';

import Footer from 'components/Footer';
import Header from 'components/Header';
import About from 'containers/About';
import Contact from 'containers/Contact';
import Experience from 'containers/Experience';
import Hero from 'containers/Hero';
import Projects from 'containers/Projects';

function App() {
  const { state } = useAppContext();
  const { hash } = useLocation();

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
      <Box style={{ filter: `blur(${state.showMenu ? '3px' : '0'})` }}>
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
