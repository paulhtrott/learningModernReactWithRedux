// Define React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = ''

// Create a new Component. This component should product some HTML
// Babel Repl -> http://babeljs.io/repl
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take the components generated html and put it on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
