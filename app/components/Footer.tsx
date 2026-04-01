'use client';

import { Link } from '@heroui/react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/gilbarbara', icon: '/icons/github.svg' },
  { label: 'X', href: 'https://twitter.com/gilbarbara', icon: '/icons/x.svg' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gilbarbara/',
    icon: '/icons/linkedin.svg',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 pb-8">
        <div className="flex justify-center gap-6 md:fixed md:bottom-8 md:right-8 md:flex-col">
          {socialLinks.map(({ href, icon, label }) => (
            <Link key={label} href={href} isExternal>
              <img alt={label} height={24} src={icon} width={24} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
