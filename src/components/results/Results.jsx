import './Results.scss';
import Loading from '../loading/Loading';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  return (
    <>
      <section>
        <pre data-testid="results"> {props.data ? <JSONPretty data={props.data} /> : <Loading />}</pre>
      </section>
    </>

  );
}
export default Results;

