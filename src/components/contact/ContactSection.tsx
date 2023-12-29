import LeftContactPanel from "./LeftContactPanel";
import RightContactPanel from "./RightContactPanel";

interface Props {}

const ContactSection = ({}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-14">
      <LeftContactPanel />
      <RightContactPanel />
    </div>
  );
};

export default ContactSection;
