// src/components/Footer.tsx
"use client";
import React from "react";
import { HoveredLink } from "@/components/ui/navbar-menu";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <p className="text-lg font-bold">Stay Connected</p>
          <div className="flex space-x-4">
            <HoveredLink href="/privacy-policy" className="text-white hover:underline">
              Privacy Policy
            </HoveredLink>
            <HoveredLink href="/terms-of-service" className="text-white hover:underline">
              Terms of Service
            </HoveredLink>
            <HoveredLink href="/contact" className="text-white hover:underline">
              Contact
            </HoveredLink>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg font-bold">Follow Us</p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <HoveredLink href="https://twitter.com">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </HoveredLink>
            <HoveredLink href="https://facebook.com">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </HoveredLink>
            <HoveredLink href="https://instagram.com">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </HoveredLink>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-4">
          <p className="text-lg font-bold">Subscribe to our Newsletter</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 text-black rounded"
            />
            <button type="submit" className="px-4 py-2 bg-white text-black rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} seashellscripts.com. All rights reserved.</p>
      </div>
    </footer>
  );
}
