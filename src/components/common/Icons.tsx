import {
  ArrowDownToLine,
  ArrowRight,
  Home,
  CircleUser,
  Briefcase,
  MessageSquareMore,
} from "lucide-react";
import {
  FaGithub,
  FaInfoCircle,
  FaUserGraduate,
  FaPhone,
  FaLanguage,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

const Icons = {
  // home button icons
  ArrowDownToLine,
  ArrowRight,
  // navbar icons
  Home: Home,
  About: CircleUser,
  Projects: Briefcase,
  Contact: MessageSquareMore,
  Menu: IoMdMenu,
  // project icons
  Github: FaGithub,
  Info: FaInfoCircle,
  // contact icons
  Location: FaLocationDot,
  Email: MdEmail,
  Education: FaUserGraduate,
  Cert: PiCertificateFill,
  Phone: FaPhone,
  Language: FaLanguage,
  Linkedin: FaLinkedin,
  Pdf: FaFilePdf,
  Send: BsFillSendFill,
};

export default Icons;
