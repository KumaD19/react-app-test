import React from 'react';

import HeaderExample from './components/header';
import Main, { library } from './components/main';
import Footer from './components/footer';

function App() {

  //const reactELement = React.createElement('p',{}, 'No es jsx')
  //How we create elements without JSX 

  const example  = (ex) =>{
    return ex
  }
  const example2 = <div>Hola</div>
  const example3 = (<div><p>Adios</p><span>Span</span></div>)
  return (
    <>
      <HeaderExample lib="Props example" />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {example2}
        {example3}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {example("Now")}
        </a>
      </header>
      <Main />
      <p>I am using {library}</p>
      <Footer />
     
    </>
  );
}

export default App;
