"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "next-view-transitions";
import { useState } from "react";

import { Button } from "@/components/elements/button";
import { cn } from "@/lib/utils";
import { IconMenu, IconX } from "@tabler/icons-react";
import { Props } from "./types";
import { Logo } from "../logo";

export const MobileNavbar = ({ leftNavbarItems, rightNavbarItems }: Props) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <div
      className={cn(
        "flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200",
        showBackground &&
          " bg-neutral-900  shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]",
      )}
    >
      <Logo />
      <IconMenu className="text-white h-6 w-6" onClick={() => setOpen(!open)} />

      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-5  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800">
          <div className="flex items-center justify-between w-full px-5">
            <Logo />
            <div className="flex items-center space-x-2">
              <IconX
                className="h-8 w-8 text-white"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            {leftNavbarItems.map((navItem: any, idx: number) => (
              <>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, idx: number) => (
                      <Link
                        key={`link=${idx}`}
                        href={`/${childNavItem.URL}`}
                        onClick={() => setOpen(false)}
                        className="relative max-w-[15rem] text-left text-2xl"
                      >
                        <span className="block text-white">
                          {childNavItem.text}
                        </span>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    key={`link=${idx}`}
                    href={`/${navItem.URL}`}
                    onClick={() => setOpen(false)}
                    className="relative"
                  >
                    <span className="block text-[26px] text-white">
                      {navItem.text}
                    </span>
                  </Link>
                )}
              </>
            ))}
          </div>
          <div className="flex flex-row w-full items-start gap-2.5  px-8 py-4 ">
            {rightNavbarItems.map((item, index) => (
              <Button
                key={item.text}
                variant={
                  index === rightNavbarItems.length - 1 ? "primary" : "simple"
                }
                as={Link}
                href={`${item.URL.startsWith("http") ? "" : `/`}${item.URL}`}
              >
                {item.text}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
