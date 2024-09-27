import { ReactNode, Children } from 'react';
import { Popover } from '@nextui-org/react';

export type DropdownProps = {
  children: ReactNode[];
};

const Dropdown = (props: DropdownProps) => {
  const { children } = props;

  const [menuTrigger, menu] = Children.toArray(children);

  return (
    <Popover>
      {menuTrigger}
      {menu}
    </Popover>
  );
};

export default Dropdown;
