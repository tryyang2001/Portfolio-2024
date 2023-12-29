"use client";

import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { pagesForNavbar } from "@/models/Pages";
import { cn } from "@/utils/classNameUtils";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Props {}

const VerticalNavbar = ({}: Props) => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<string>(
    pathname === "/"
      ? "home"
      : pathname.replace("/", "").toLowerCase() || "home"
  );

  return (
    <div className="flex lg:top-[2%] lg:bottom-[90%] lg:left-[50%] lg:right-[50%] lg:flex-row xl:flex-col z-10 xl:top-[50%] xl:bottom-[50%] xl:left-[90%] xl:right-[5%] justify-center fixed">
      {pagesForNavbar.map((page) => {
        const LucideIcon = page.icon;
        return (
          <div
            className="flex justify-center items-center my-3 lg:mx-3 shadow"
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
                  "items-center rounded-full hover:bg-clr-nus-blue text-clr-white font-semibold",
                  {
                    "bg-clr-secondary": currentPage === page.name.toLowerCase(),
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

export default VerticalNavbar;
