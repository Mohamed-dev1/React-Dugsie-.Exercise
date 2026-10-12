import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

function Greeting() {
  const language = useContext(LanguageContext);

  const messages = {
    englsh: 'Hello!',
    spanis: 'Hola!',
  };

  return <h1>{messages[language]}</h1>;
}

export default Greeting;
