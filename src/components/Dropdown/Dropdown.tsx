import { ReactNode, Children, useState } from 'react';
import { Popover } from '@nextui-org/react';

export type DropdownProps = {
  children: ReactNode[];
};

const Dropdown = (props: DropdownProps) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [menuTrigger, menu] = Children.toArray(children);

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottom"
      showArrow
    >
      {menuTrigger}
      {menu}
    </Popover>
  );
};

export default Dropdown;
