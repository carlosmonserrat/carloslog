import React, {useEffect} from 'react'
import MainPage from "./pages/main";
import WebFont from 'webfontloader';
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Merriweather', 'Roboto','Roboto Condensed']
      }
    });
  }, []);
  return (
    <MainPage/>
  );
}

export default App;
