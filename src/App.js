import './App.css';
import SiteBody from './components/SiteBody';
import SiteHeader from './components/SiteHeader';
import { useState } from 'react';

function App() {
  const [activeBodyPage, setActiveBodyPage] = useState('home');

  function handleNavSelect(newPage) {
    setActiveBodyPage(newPage);
  }

  return (
    <div className="App">
      <SiteHeader onNavSelect={handleNavSelect}/>
      <SiteBody activeBodyPage={activeBodyPage}/>
      <footer>
        <p>Forged by Zak Lang</p>
      </footer>
    </div>
  );
}

export default App;
