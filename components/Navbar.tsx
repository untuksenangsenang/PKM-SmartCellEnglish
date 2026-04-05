import Link from "next/link";
import { Home, BookOpen, Video, Mic, CheckSquare } from "lucide-react";

export default function Navbar() {
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
      <nav className="hidden md:flex w-full bg-white shadow-sm h-16 items-center px-8 border-b border-border sticky top-0 z-50">
        <div className="flex items-center gap-2 mr-auto">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-primary tracking-tight">Smart Cell English</span>
        </div>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 top-auto left-0 w-full bg-white border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full text-foreground/60 hover:text-primary transition-colors hover:bg-secondary/50 rounded-lg mx-1"
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
