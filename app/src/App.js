import React, {useEffect} from 'react'
import WebFont from 'webfontloader';
import Router from "./router";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Merriweather', 'Roboto', 'Roboto Condensed']
      }
    });
  }, []);
  return (
    <Router/>
  );
}

export default App;
