import { PopoverTrigger } from '@nextui-org/react';

export type DropdownTriggerProps = {
  children: React.ReactNode;
};

const DropdownTrigger = (props: DropdownTriggerProps) => {
  const { children } = props;

  return <PopoverTrigger>{children}</PopoverTrigger>;
};

export default DropdownTrigger;
