"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Space_Grotesk as FontSans } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-[800px] mx-auto py-12 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-[100dvh] flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Critical Error
            </p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Something went wrong
            </h1>
            <p className="max-w-md text-muted-foreground">
              A critical error occurred while loading this site.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => reset()}>Try again</Button>
              <a
                href="/"
                className={buttonVariants({ variant: "outline" })}
              >
                Back home
              </a>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
