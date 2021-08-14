import React from 'react';
import './app.scss';
import { useState, useEffect, useReducer } from 'react';
import Header from './components/header/Header';
import Results from './components/results/Results';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import History from './components/history/History';
import { PacmanLoader } from 'react-spinners';
import axios from 'axios';



function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [history, setHistory] = useState([]);
  const [showLoading, setLoading] = useState(false);


  useEffect(() => {
    try {
      async function fetchData() {
        if (requestParams.url) {
          console.log(requestParams.url);
          const res = await axios({
            method: requestParams.method,
            url: requestParams.url,
          });
          setData(res);
          setLoading(false);
        }
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [requestParams]);


  async function callApi(formData) {
    setLoading(true);
    if (formData.url !== "") {
      setRequestParams(formData);
      setHistory([...history, formData]);
    }
    else {
      const res = {
        count: 2,
        method: formData.method,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setLoading(false);
      setData({ res });
      setRequestParams(formData);
      console.log(data);
      setHistory([...history, formData]);
    }
  }

  return (
    <div>
      <React.Fragment>
        <Header />
        <div>Request method :  {requestParams.method}</div>
        <div>URL :  {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        {history !== null && <History history={history} />}
        {showLoading ? <PacmanLoader loading={showLoading} /> : <Results data={data} />}
        <Footer />
      </React.Fragment>

    </div>
  );
}

export default App;


