import { type FC, type ReactNode } from 'react';

interface NestedLayoutProps {
  children: ReactNode;
}

const NestedLayout: FC<NestedLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <h2>There should be detailed card</h2>
    </>
  );
};

export default NestedLayout;
