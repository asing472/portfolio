import { useEffect } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ScrollButton } from './components';
import AnimatedCursor from 'react-animated-cursor';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route path

  useEffect(() => {
    // Scroll to the top of the page on route change or reload
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Smooth scrolling
    });
    // Reset the URL hash to "#" on page reload
    window.location.hash = "";
  }, [pathname]);

  return null; // No UI rendering
};

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color='43, 297, 40'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5} 
        />
      <ScrollToTop /> {/* Add ScrollToTop */}
      <div className="relative z-0 bg-primary">
        <div >
          <Navbar />
        </div>
        <div className="relative z-0">
            <Hero />
            <StarsCanvas />
        </div>
        <Works />
        <Experience />
        {/* <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
        <Tech />
        < ScrollButton />
      </div>
    </BrowserRouter>
  );
};

export default App;