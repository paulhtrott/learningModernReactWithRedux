// Define React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import API_KEY from './../api_key';

// Create a new Component. This component should product some HTML
// Babel Repl -> http://babeljs.io/repl
const App = () => {
  console.log(API_KEY);
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
