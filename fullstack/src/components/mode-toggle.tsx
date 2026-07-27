"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

export const ModeToggle = React.forwardRef<HTMLButtonElement>(
  function ModeToggle(props, ref) {
    const { resolvedTheme, setTheme } = useTheme();

    return (
      <Button
        {...props}
        ref={ref}
        variant="ghost"
        type="button"
        size="icon"
        aria-label="Toggle theme"
        className="px-2"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
    );
  }
);
