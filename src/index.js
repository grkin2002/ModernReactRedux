import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyDqd1GNnsQHo_gfnOlSVe4aaeT8w-40g2g";

//Create a new component, This component should produce some HTML
const App = () => {
  return <div>Hi There !</div>
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
