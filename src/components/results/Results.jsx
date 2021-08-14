import './Results.scss';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  // console.log(props.data?.data);
  // console.log('props.data.headers', props.data?.headers);

  const fake = {
    'content-type': 'application/json',
  };

  return (
    <>
      <section>
        <h1>Headers: </h1>
        <pre> {props.data && <JSONPretty data={props.data.headers ? props.data.headers : fake} />}</pre>


        <pre>
          {props.data?.data.results && <>
            <h1>Count:</h1>
            <JSONPretty data={props.data.data.results.length} />
          </>}
        </pre>

        <h1>Results:</h1>
        <pre data-testid="results"> {props.data?.data && <JSONPretty data={props.data.data.results ? props.data.data.results : props.data.data} />}</pre>

      </section>

    </>
  );
}
export default Results;

