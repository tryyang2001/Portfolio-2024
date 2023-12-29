"use client";

import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { pagesForNavbar } from "@/models/Pages";
import { cn } from "@/utils/classNameUtils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Icons from "./common/Icons";

interface Props {}

const Navbar = ({}: Props) => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<string>(
    pathname === "/"
      ? "home"
      : pathname.replace("/", "").toLowerCase() || "home"
  );

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isControlByMenu, setIsControlByMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1280) {
        setIsControlByMenu(true);
      } else {
        setIsControlByMenu(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div className="flex lg:top-[2%] lg:bottom-[90%] lg:left-[50%] lg:right-[50%] lg:flex-row xl:flex-col z-10 xl:top-[50%] xl:bottom-[50%] xl:left-[90%] xl:right-[5%] justify-center fixed">
      <div className="fixed top-[2%] bottom-[90%] my-3 left-[2%] xl:hidden">
        <Button
          className="items-center rounded-full hover:bg-clr-nus-blue text-clr-white font-semibold bg-clr-grey-4"
          isIconOnly
          size="lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icons.Menu />
        </Button>
      </div>
      {/* horizontal navbar with menu */}
      {isControlByMenu &&
        isMenuOpen &&
        pagesForNavbar.map((page) => {
          const LucideIcon = page.icon;
          return (
            <div
              className="flex justify-center items-center my-3 mx-3 shadow transition-transform transform hover:scale-110"
              key={page.name}
            >
              <Tooltip
                content={page.name}
                showArrow
                placement="bottom"
                className="bg-clr-grey-5 text-clr-white"
              >
                <Button
                  as={Link}
                  href={page.path}
                  className={cn(
                    "items-center rounded-full hover:bg-clr-nus-blue transition-transform transform hover:scale-110 text-clr-white font-semibold",
                    {
                      "bg-clr-secondary":
                        currentPage === page.name.toLowerCase(),
                      "bg-clr-grey-4": currentPage !== page.name.toLowerCase(),
                    }
                  )}
                  size="lg"
                  isIconOnly
                  onClick={() => setCurrentPage(page.name.toLowerCase())}
                >
                  <LucideIcon />
                </Button>
              </Tooltip>
            </div>
          );
        })}
      {/* vertical navbar */}
      {!isControlByMenu &&
        pagesForNavbar.map((page) => {
          const LucideIcon = page.icon;
          return (
            <div
              className="flex justify-center items-center my-3 shadow transition-transform transform hover:scale-110"
              key={page.name}
            >
              <Tooltip
                content={page.name}
                showArrow
                placement="left"
                className="bg-clr-grey-5 text-clr-white"
              >
                <Button
                  as={Link}
                  href={page.path}
                  className={cn(
                    "items-center rounded-full hover:bg-clr-nus-blue transition-transform transform hover:scale-110 text-clr-white font-semibold",
                    {
                      "bg-clr-secondary":
                        currentPage === page.name.toLowerCase(),
                      "bg-clr-grey-4": currentPage !== page.name.toLowerCase(),
                    }
                  )}
                  size="lg"
                  isIconOnly
                  onClick={() => setCurrentPage(page.name.toLowerCase())}
                >
                  <LucideIcon />
                </Button>
              </Tooltip>
            </div>
          );
        })}
    </div>
  );
};

export default Navbar;
