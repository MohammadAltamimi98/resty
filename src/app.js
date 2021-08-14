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
  // const [history, setHistory] = useState([]);
  const initialState = {
    history: []
  };
  const [state, dispatch] = useReducer(makeHistory, initialState);
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
          dispatch(actionForHistory(requestParams));
        }
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [requestParams]);


  function makeHistory(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
    case 'ADD_HISTORY':
      const history = [...state.history, payload.history];
      return { history };
    default:
      return state;
    }
  }

  function actionForHistory(history) {
    return {
      type: 'ADD_HISTORY',
      payload: { history }
    };
  }

  async function callApi(formData) {
    setLoading(true);
    if (formData.url !== '') {
      setRequestParams(formData);
      dispatch(actionForHistory(requestParams));
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
      dispatch(actionForHistory(requestParams));
    }
  }

  return (
    <div>
      <React.Fragment>
        <Header />
        <div>Request method :  {requestParams.method}</div>
        <div>URL :  {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        {state.history !== null && <History history={state.history} />}
        {showLoading ? <PacmanLoader loading={showLoading} /> : <Results data={data} />}
        <Footer />
      </React.Fragment>

    </div>
  );
}

export default App;


