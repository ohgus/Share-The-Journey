import { ReactNode } from 'react';
import { FocusScope } from '@react-aria/focus';
import { PopoverContent } from '@nextui-org/react';

const DropdownMenu = ({ children }: { children: ReactNode }) => {
  return (
    <PopoverContent>
      <FocusScope contain restoreFocus autoFocus>
        <ul className="py-1">{children}</ul>
      </FocusScope>
    </PopoverContent>
  );
};

export default DropdownMenu;
