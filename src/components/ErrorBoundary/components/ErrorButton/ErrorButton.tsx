import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './ErrorButton.module.scss';
import { ERROR_TEXT_BY_CLICK } from '../../../../constants/stringConstants';

export const ErrorButton: FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (hasError) {
      throw new Error(ERROR_TEXT_BY_CLICK);
    }
  }, [hasError]);

  const handleThrowError = (): void => {
    setHasError((state) => !state);
  };

  return (
    <div className="wrapper">
      <button className={cn(styles.error_btn, 'btn')} onClick={handleThrowError}>
        Show Error
      </button>
    </div>
  );
};
