'use client';

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';

import { useMenu } from '~/context/menu';

import Logo from '~/components/Logo';

const navItems = [
  { label: 'Experience', hash: 'experience' },
  { label: 'Projects', hash: 'projects' },
  { label: 'About', hash: 'about' },
  { label: 'Contact', hash: 'contact' },
];

function scrollToSection(hash: string) {
  const element = document.getElementById(hash);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  const { close, isOpen, toggle } = useMenu();

  const handleNavClick = (hash: string) => {
    scrollToSection(hash);
    close();
  };

  return (
    <Navbar
      classNames={{
        base: 'bg-background/90',
        wrapper: 'max-w-5xl',
      }}
      isMenuOpen={isOpen}
      onMenuOpenChange={toggle}
      shouldHideOnScroll={false}
    >
      <NavbarBrand>
        <button
          className="text-xl text-primary font-bold"
          onClick={() => scrollToSection('hero')}
          type="button"
        >
          <Logo />
        </button>
      </NavbarBrand>

      <NavbarContent className="hidden gap-6 md:flex" justify="center">
        {navItems.map(({ hash, label }) => (
          <NavbarItem key={hash}>
            <button
              className="hover:text-primary"
              onClick={() => handleNavClick(hash)}
              type="button"
            >
              {label}
            </button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            as={Link}
            className="text-foreground text-base"
            color="secondary"
            href="https://files.gilbarbara.dev/media/resume-en.pdf"
            isExternal
            variant="flat"
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle aria-label={isOpen ? 'Close menu' : 'Open menu'} className="md:hidden" />

      <NavbarMenu className="bg-[#002224] pt-8">
        {navItems.map(({ hash, label }) => (
          <NavbarMenuItem key={hash}>
            <button
              className="w-full text-left text-lg"
              onClick={() => handleNavClick(hash)}
              type="button"
            >
              {label}
            </button>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            className="text-lg"
            href="https://files.gilbarbara.dev/media/resume-en.pdf"
            isExternal
          >
            Resume
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
