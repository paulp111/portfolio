"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300 ease-in-out",
        {
          "top-[2rem] opacity-100": showNavbar, // Navbar sichtbar
          "-top-20 opacity-0": !showNavbar,     // Navbar unsichtbar
        }
      )}
      style={{ height: "4rem" }}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/subpage">Web Development</HoveredLink>
            <HoveredLink href="/subpage">Interface Design</HoveredLink>
            <HoveredLink href="/subpage">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/subpage">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="JavaScript"
              href="/subpage"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Typescript"
              href="/subpage"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="React"
              href="/subpage"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Kotlin"
              href="/subpage"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/subpage">Hobby</HoveredLink>
            <HoveredLink href="/subpage">Individual</HoveredLink>
            <HoveredLink href="/subpage">Team</HoveredLink>
            <HoveredLink href="/subpage">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
