import './Results.scss';
import Loading from '../loading/Loading';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  return (
    <>
      <section>

        <pre> {props.headers ? <JSONPretty data={props.headers} /> : <Loading />}</pre>

        <pre> {props.count ? <JSONPretty data={props.count} /> : <Loading />}</pre>

        <pre data-testid="results"> {props.data ? <JSONPretty data={props.data} /> : <Loading />}</pre>

      </section>
    </>

  );
}
export default Results;

