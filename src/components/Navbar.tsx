"use client";

import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { pagesForNavbar } from "@/models/Pages";
import { cn } from "@/utils/classNameUtils";
import { useEffect, useReducer, useState } from "react";
import { usePathname } from "next/navigation";
import Icons from "./common/Icons";

const pageReducer = (state: string, action: string) => {
  switch (action) {
    case "home" || "/" || "":
      return "home";
    case "projects":
      return "projects";
    case "about":
      return "about";
    case "contact":
      return "contact";
    default:
      return state;
  }
};

const Navbar = () => {
  const pathname = usePathname();

  const initialPageState =
    pathname === "/"
      ? "home"
      : pathname.replace("/", "").toLowerCase() || "home";

  const [pageState, dispatchPageState] = useReducer(
    pageReducer,
    initialPageState
  );

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isControlByMenu, setIsControlByMenu] = useState<boolean>(false);

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setIsControlByMenu(true);
    } else {
      setIsControlByMenu(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1280) {
        setIsControlByMenu(true);
      } else {
        setIsControlByMenu(false);
      }
    });

    setIsReady(true);

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div className="flex top-[2%] bottom-[90%] left-[50%] right-[50%] flex-row xl:flex-col xl:top-[50%] xl:bottom-[50%] xl:left-[90%] xl:right-[5%] justify-center fixed z-[9999]">
      {isControlByMenu && (
        <div className="fixed top-[2%] bottom-[90%] my-3 left-[2%] xl:hidden">
          <Button
            className="items-center rounded-full hover:bg-clr-nus-blue text-clr-white font-semibold bg-clr-grey-4"
            isIconOnly
            size="lg"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              console.log(isControlByMenu, isMenuOpen);
            }}
          >
            <Icons.Menu />
          </Button>
        </div>
      )}
      {/* horizontal navbar with menu */}
      {isControlByMenu &&
        isMenuOpen &&
        pagesForNavbar.map((page) => {
          const LucideIcon = page.icon;
          return (
            <div
              className="flex justify-center items-center my-3 mx-3 shadow transition-transform transform hover:scale-110 z-50"
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
                      "bg-clr-secondary": pageState === page.name.toLowerCase(),
                      "bg-clr-grey-4": pageState !== page.name.toLowerCase(),
                    }
                  )}
                  size="lg"
                  isIconOnly
                  onClick={() => dispatchPageState(page.name.toLowerCase())}
                >
                  <LucideIcon />
                </Button>
              </Tooltip>
            </div>
          );
        })}
      {/* vertical navbar */}
      {isReady &&
        !isControlByMenu &&
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
                      "bg-clr-secondary": pageState === page.name.toLowerCase(),
                      "bg-clr-grey-4": pageState !== page.name.toLowerCase(),
                    }
                  )}
                  size="lg"
                  isIconOnly
                  onClick={() => dispatchPageState(page.name.toLowerCase())}
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
