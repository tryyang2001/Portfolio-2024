interface Props {
  value: number;
  field: string;
}

const VisualCard = ({ value, field }: Props) => {
  return (
    <div className="border border-clr-grey-5 hover:border-clr-secondary rounded-md transition-all ease-in-out">
      <div className="flex flex-col p-6">
        <p className="text-4xl lg:text-5xl font-bold text-clr-secondary">
          {value}+
        </p>
        <p className="pt-3 lg:pl-1 xl:pl-10 relative uppercase text-medium xl:text-xl text-clr-grey-1">
          {field}
        </p>
      </div>
    </div>
  );
};

export default VisualCard;
