import './App.css';
import React, { useContext, useEffect } from 'react';

import { Header, Navbar, Apiresult } from "./components"
import { contextProvider } from './context/Context';

function App() {

  const { result } = useContext(contextProvider)

  useEffect(() => {
    result()
    // enter()
  }, [])

  return (
    <div>
      <Navbar />
      <Header />
      <Apiresult />

    </div>
  );
}

export default App;
