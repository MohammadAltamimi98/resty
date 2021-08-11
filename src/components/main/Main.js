import React, { useState } from 'react';
import Form from '../form/Form';
import Results from '../results/Results';

function Main(props) {
  const [headers, setHeaders] = useState();
  const [results, setResults] = useState([]);
  const [count, setCount] = useState();



  function callApi(results, headers) {
    setResults(results);
    setHeaders(headers);
    setCount(results.length);
  };


  return (
    <>
      <Form handleApiCall={callApi} />
      <Results data={{ headers: headers, results: results, count: count }} />
    </>

  );
};


export default Main;
