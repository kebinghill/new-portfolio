export const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: any;
}) => (
  <button
    className={`relative flex items-center p-0 mx-[7.5px] w-[30px] h-[30px] outline-none border-none bg-transparent after:bg-[#efefef] after:w-[100%] after:h-[4px] after:rounded-[2px] content-none ${
      selected ? 'after:bg-[#1bcacd] after:opacity-[1]' : ''
    }`}
    type='button'
    onClick={onClick}
  />
);
