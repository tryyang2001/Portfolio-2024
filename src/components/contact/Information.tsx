interface Props {
  personalInfo: PersonalInfo;
}

const Information = ({ personalInfo }: Props) => {
  const LucideIcon = personalInfo.icon;
  return (
    <div className="my-3">
      <LucideIcon className="inline mx-2 w-5 h-5" />
      <label
        className="text-clr-secondary font-medium capitalize"
        htmlFor={personalInfo.field}
      >
        {personalInfo.field}
      </label>
      :<span className="ml-1 lg:ml-4">{personalInfo.value}</span>
    </div>
  );
};

export default Information;
