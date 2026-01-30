"use client";
import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { navIconItems, navLinkItems } from "@/lib/layout.shared";
import { Icon } from "./icon";

export default function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo href="/" logo={<Icon name="si-astro" />} name="ARV" />
        <NavItems items={navLinkItems} />
        <div className="flex items-center">
          {navIconItems.map((item) => (
            <NavbarButton href={item.link} key={item.link} variant="secondary">
              <Icon name={item.icon} />
            </NavbarButton>
          ))}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo href="/" logo={<Icon name="si-astro" />} name="ARV" />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navLinkItems.map((item) => (
            <a
              className="relative text-neutral-600 dark:text-neutral-300"
              href={item.link}
              key={`mobile-link-${item.name}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col">
            {navIconItems.map((item) => (
              <NavbarButton
                className="w-full"
                href={item.link}
                key={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
              >
                <Icon name={item.icon} />
              </NavbarButton>
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
