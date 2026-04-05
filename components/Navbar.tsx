"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Video, Mic, CheckSquare } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Modules", href: "/modules", icon: BookOpen },
    { label: "Videos", href: "/videos", icon: Video },
    { label: "Speaking", href: "/podcast", icon: Mic },
    { label: "Quiz", href: "/quiz", icon: CheckSquare },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex w-full bg-card shadow-sm h-16 items-center px-8 border-b border-border sticky top-0 z-50">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 mr-auto">
          <Image
            src="/logo.png"
            alt="Smart Cell English Logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <span className="font-bold text-xl text-primary tracking-tight">
            Smart Cell English
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 font-medium transition-colors
                  ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
          <div className="hidden sm:block ml-2 border-l border-border pl-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-card border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center w-full h-full transition-colors rounded-lg mx-1
                  ${
                    isActive
                      ? "text-primary bg-secondary/40"
                      : "text-foreground/60 hover:text-primary hover:bg-secondary/50"
                  }`}
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}