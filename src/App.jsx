import { useState, useEffect } from 'react';
import { Navbar } from './Components/Navbar';
import { Card } from './Components/Card';
import { Footer } from './Components/Footer';
import { Preloader } from './Components/Preloader';

function App() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(true);
    }, 1000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {flag ? (
        <>
          <Navbar />
          <Card />
          <Footer />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
