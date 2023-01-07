import React from 'react';

import Link from 'next/link';

import { LINKS } from './constants';

const Header = () => (
  <header className="p-5 bg-pink-500">
    {LINKS.map(({ title, path }) => (
      <Link
        className="px-2 py-1 bg-white text-pink-500 rounded-lg ml-4"
        href={path}
        key={path}
      >
        {title}
      </Link>
    ))}
  </header>
);

export default Header;
