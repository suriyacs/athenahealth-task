import { useSelector } from 'react-redux';

import { getPendingSelector as listSelector } from '../../store/home/selectors';

import styles from './Loader.module.scss';

const Loader = () => {
  const homePending = useSelector(listSelector);
  return (
    <div>
      {homePending ? (
        <div id="loader" className={`${styles.loadingOverlay}`}>
          <div className={`${styles.loader}`}>
            <div className={`${styles.loaderOne}`} />
            <div className={`${styles.loaderTwo}`} />
            <div className={`${styles.loaderThree}`} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Loader;
