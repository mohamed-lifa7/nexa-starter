"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();
  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="/"
        className="mx-6 flex items-center space-x-2 text-primary dark:text-foreground"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          Muswaddaty
        </span>
      </Link>
      <nav className="flex items-center space-x-4 text-sm font-medium rtl:space-x-reverse">
      <Link
          href="/documents"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Documentaion
        </Link>
        <Link
          href="/support"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Support
        </Link>
      </nav>
    </div>
  );
}
