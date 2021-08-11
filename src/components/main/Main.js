import React, { useState } from 'react';
import Form from '../form/Form';
import Results from '../results/Results';

function Main(props) {
  const [headers, setHeaders] = useState();
  const [results, setResults] = useState([]);
  const [count, setCount] = useState('');
  const [flag, setFlag] = useState();



  function callApi(results, headers) {
    setResults(results);
    setHeaders(headers);

    if (!results.results.length) {
      setCount('Can not count the items due to recognition issues');
    }
    else { setCount(results.results?.length); }
  };


  return (
    <>
      <Form handleApiCall={callApi} />
      <Results data={{ headers: headers, results: results, count: count }} />
    </>

  );
};


export default Main;
