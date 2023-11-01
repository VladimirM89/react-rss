import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <div>
      <p>This page nof found</p>
      <p>
        Go to <Link to="/">main page</Link>
      </p>
    </div>
  );
};
