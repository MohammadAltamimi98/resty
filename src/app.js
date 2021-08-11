import React from 'react';
import './app.scss';
import { useState, useEffect, useReducer } from 'react';
import Header from './components/header/Header';
import Results from './components/results/Results';
import Form from './components/form/Form';


function App(props) {
  const [headers, setHeaders] = useState();
  const [results, setResults] = useState(['server is running']);
  const [count, setCount] = useState();
  const [res, setRes] = useState('');

  function callApi(results, headers, res, request) {
    // console.log(config, results, headers);
    setResults(results);
    setCount(results.results.length);
    setHeaders(headers);
    setRes(res);
    console.log(results);
  }

  return (
    <div>
      <React.Fragment>
        <Header />
        <Form handleApiCall={callApi} />
        {res.config === undefined ? null :
          <><div>Request Method: {res.config.method}</div>
            <div>URL: {res.config.url}</div></>}
        <Results data={{ results: results, count: count, headers: headers }} />
      </React.Fragment>

    </div>
  );
}

export default App;


