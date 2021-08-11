import React from 'react';
import './app.scss';

import Header from './components/header/Header';
// import Results from './components/results/Results';
import Form from './components/form/Form';


export default function app(props) {

  function callApi(formData, request) {
    console.log(formData);

  }
  return (
    <div>
      <React.Fragment>
        <Header />
        <Form handleApiCall={callApi} />
        {/* <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
     
        <Results data={this.state.data} /> */}
      </React.Fragment>

    </div>
  );
}






// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//       loadingDisplay: false
//     };
//   }

//   callApi = (requestParams, requestBody) => {
//     const data = {
//       headers: {
//         'content-type': 'string application/json'
//       },
//       count: 2,
//       results: [
//         { name: 'fake thing 1', url: 'http://fakethings.com/1' },
//         { name: 'fake thing 2', url: 'http://fakethings.com/2' },
//       ],
//     };
//     this.setState({ data, requestParams, loadingDisplay: true });
//     console.log(requestParams.method);
//   }


//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
