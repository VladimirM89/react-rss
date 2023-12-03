import { Link } from 'react-router-dom';
import styles from './LinkToMainComponent.module.scss';

const LinkToMainComponent = () => {
  return (
    <Link to="/" className={styles.mainLink}>
      Go to main page
    </Link>
  );
};

export default LinkToMainComponent;
