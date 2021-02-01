import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderSpinner.module.css';

function LoaderSpinner() {
  return (
    <div className={s.wrapper}>
      <Loader type="BallTriangle" color="#8B008B" height="40" />
    </div>
  );
}

export default LoaderSpinner;
