"use client";

import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

import { IconContainer } from "../icon-container";
import ShootingStars from "@/components/decorations/shooting-star";
import StarBackground from "@/components/decorations/star-background";
import { cn } from "@/lib/utils";
import { IconUser, IconUserFilled } from "@tabler/icons-react";

let loopInterval: NodeJS.Timeout;
export const SkeletonFour = () => {
  const icons = useMemo(
    () => [
      {
        title: "User1",
        icon: (Icon: any) => <Icon size={31} />,
        className: "left-2 top-2",
      },
      {
        title: "User2",
        icon: (Icon: any) => <Icon size={31} />,
        className: "left-32 top-32",
      },
      {
        title: "User3",
        icon: (Icon: any) => <Icon size={31} />,
        className: "left-1/2 top-1/2",
      },
      {
        title: "User4",
        icon: (Icon: any) => <Icon size={31} />,
        className: "left-1/2 top-20",
      },
      {
        title: "User5",
        icon: (Icon: any) => <Icon size={31} />,
        className: "right-20 top-20",
      },
      {
        title: "User6",
        icon: (Icon: any) => <Icon size={31} />,
        className: "right-20 bottom-0",
      },
      {
        title: "User7",
        icon: (Icon: any) => <Icon size={31} />,
        className: "left-52 bottom-10",
      },
      {
        title: "User8",
        icon: (Icon: any) => <Icon size={31} />,
        className: "left-32 bottom-60",
      },
      {
        title: "User9",
        icon: (Icon: any) => <Icon size={31} />,
        className: "right-96 top-24",
      },
      {
        title: "User10",
        icon: (Icon: any) => <Icon size={31} />,
        className: "left-10 bottom-0",
      },
      {
        title: "User11",
        icon: (Icon: any) => <Icon size={31} />,
        className: "right-40 top-0",
      },
      {
        title: "User12",
        icon: (Icon: any) => <Icon size={31} />,
        className: "right-40 top-40",
      },
      {
        title: "User13",
        icon: (Icon: any) => <Icon size={31} />,
        className: "right-0 bottom-60",
      },
      {
        title: "User14",
        icon: (Icon: any) => <Icon size={31} />,
        className: "right-10 bottom-80",
      },
    ],
    [],
  );

  const [active, setActive] = useState(icons[0]);

  useEffect(() => {
    loopInterval = setInterval(() => {
      setActive(icons[Math.floor(Math.random() * icons.length)]);
    }, 3000);
    return () => clearInterval(loopInterval);
  }, [icons]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex flex-col group [perspective:8000px] [transform-style:preserve-3d]">
      <StarBackground />
      <ShootingStars />

      {icons.map((icon) => (
        <IconContainer
          className={cn(
            "rounded-full opacity-20 mx-2 absolute",
            icon.className,
            active.title === icon.title && "opacity-100",
          )}
          key={icon.title}
        >
          {icon.icon(active.title === icon.title ? IconUserFilled : IconUser)}
          {active.title === icon.title && (
            <motion.div
              layoutId="bubble"
              className="absolute h-16 w-16 inset-0 rounded-full border-2  -ml-0.5 -mt-0.5 border-amber-500"
            ></motion.div>
          )}
        </IconContainer>
      ))}
    </div>
  );
};
