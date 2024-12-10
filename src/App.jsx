import './App.css'; // Correct syntax for importing a CSS file
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Asics from './components/asics';
// Removed unused import for tailwindConfig as it's not used in the code

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <Navbar/>
     <Asics/>
    </div>
  );
}

export default App;



