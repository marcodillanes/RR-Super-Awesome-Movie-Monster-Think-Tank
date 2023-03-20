import React, { Suspense } from 'react';
import './App.css';
// remove original imports and replace them with lazy loading instead!
// import AboutUs from './components/AboutUs'
// import Packages from './components/Packages'


function App() {

const AboutUs = React.lazy(() => import('./components/AboutUs'))
const Packages = React.lazy(() => import('./components/Packages'))

  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
        <Suspense fallback={<h1>Loading...</h1>}>
          <AboutUs />
          <Packages />
          </Suspense>
      </div>
    </div>
  );
}

export default App;


//throttle network speeds to test application is working as intended!