import './Results.scss';
import Loading from '../loading/Loading';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  return (
    <>
      <section>
        "headers:"
        <pre> {props.data.headers ? <JSONPretty data={props.data.headers} /> : <Loading />}</pre>

        "count:"
        <pre> {props.data.count ? <JSONPretty data={props.data.count} /> : <Loading />}</pre>

        "results"
        <pre data-testid="results"> {props.data.results ? <JSONPretty data={props.data.results} /> : <Loading />}</pre>
      </section>

    </>

  );
}
export default Results;

