import { FC } from 'react';
import Link from 'next/link';

const NotFoundPage: FC = () => {
  return (
    <div>
      <p>This page not found</p>
      <p>
        Go to <Link href="/">main page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
