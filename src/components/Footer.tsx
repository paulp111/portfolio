"use client";
import React from "react";
import { HoveredLink } from "@/components/ui/navbar-menu";

// FIX: Pfeile neben dem Text
// FIX: arrow.svg verwenden statt svg code direkt

export function Footer() {
  return (
    <footer className="bg-[#eaecff] text-black py-4 w-full">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <HoveredLink
            href="https://twitter.com"
            className="text-black hover:underline flex items-center"
          >
            <span>Follow me</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              />
            </svg>
          </HoveredLink>
          <HoveredLink
            href="/newsletter"
            className="text-black hover:underline flex items-center"
          >
            <span>Get email updates</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              />
            </svg>
          </HoveredLink>
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} seashellscripts.com
        </p>
      </div>
    </footer>
  );
}
