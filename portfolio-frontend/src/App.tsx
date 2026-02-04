import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Certifications,
  Contact,
  Comments,
  Footer,
} from './components/sections';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <Comments />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
