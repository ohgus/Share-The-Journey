type DropdownItemProps = {
  children: React.ReactNode;
  onClick: () => void;
  itemKey: string;
  description?: string;
};

const DropdownItem = ({
  children,
  onClick,
  itemKey,
  description,
}: DropdownItemProps) => {
  return (
    <li
      className="rounded-lg p-2 cursor-pointer hover:text-black hover:bg-slate-300"
      onClick={onClick}
      key={itemKey}
    >
      <h3>{children}</h3>
      {description && (
        <span className="text-xs text-gray-500">{description}</span>
      )}
    </li>
  );
};

export default DropdownItem;
