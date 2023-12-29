import Icons from "@/components/common/Icons";
import { Page } from "./types/page";

export const pagesForNavbar: Page[] = [
  {
    name: "Home",
    path: "/",
    icon: Icons.Home,
  },
  {
    name: "About",
    path: "/about",
    icon: Icons.About,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Icons.Projects,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Icons.Contact,
  },
];
