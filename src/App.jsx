import { useEffect, useState } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import { Experience, Hero, Navbar, Tech, Works, StarsCanvas, ScrollButton } from './components';
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

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
            {!isMobile&&<StarsCanvas />}
        </div>
        <Works />
        <Experience />
        <Tech />
        < ScrollButton />
      </div>
    </BrowserRouter>
  );
};

export default App;

        