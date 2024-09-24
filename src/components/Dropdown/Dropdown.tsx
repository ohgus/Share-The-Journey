import { ReactNode } from 'react';

export type DropdownProps = {
  children: ReactNode[];
};

const Dropdown = (props: DropdownProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Dropdown;
