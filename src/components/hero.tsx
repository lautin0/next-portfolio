"use client";

import { motion } from "framer-motion";
import React from "react";

import { Cover } from "./decorations/cover";
import ShootingStars from "./decorations/shooting-star";
import StarBackground from "./decorations/star-background";
import { Button } from "./elements/button";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <StarBackground />
        <ShootingStars />
      </motion.div>
      <div className="rounded-full overflow-hidden relative w-48 h-48 border-2">
        <Image fill src={"/1517241382357.jpeg"} alt={"avatar"} />
      </div>
      <h1 className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-10  py-6">
        Hi, I&apos;m <Cover>Tinsley Lau</Cover>
      </h1>
      <h2 className="text-center mt-2 md:mt-6 text-base md:text-xl text-muted  max-w-3xl mx-auto relative z-10">
        Building seamless, scalable web experiences with React, Next.js, and
        beyond.
      </h2>
      <div className="flex space-x-2 items-center mt-8">
        <Button as={Link} href={"#experience-section"}>
          Explore
        </Button>
        <Button
          as={Link}
          href={"https://www.linkedin.com/in/tinsleylau/"}
          variant="muted"
        >
          Contact Me
        </Button>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-charcoal to-transparent" />
    </div>
  );
};
