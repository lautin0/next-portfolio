import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black   relative z-20"
    >
      <Image
        src={'/undraw_cool-guy-avatar_qjc4.svg'}
        alt={'Website Logo'}
        width={200}
        height={200}
        className="h-10 w-10 rounded-xl mr-2"
      />
    </Link>
  );
};
