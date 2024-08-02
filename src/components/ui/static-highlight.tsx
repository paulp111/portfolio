"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const StaticHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",
        className
      )}
    >
      {children}
    </span>
  );
};
