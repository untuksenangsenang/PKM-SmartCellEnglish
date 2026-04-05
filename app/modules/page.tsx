import ModuleCard from "@/components/ModuleCard";
import { Search } from "lucide-react";

export default function ModulesPage() {
  const modules = [
    { title: "Greetings & Introductions", description: "Pelajari cara menyapa dan memperkenalkan diri dalam Bahasa Inggris.", progress: 100, href: "/modules/greetings" },
    { title: "Daily Routines", description: "Kosakata seputar aktivitas sehari-hari.", progress: 45, href: "/modules/routines" },
    { title: "Family & Friends", description: "Mengenal anggota keluarga dan teman.", progress: 0, href: "/modules/family" },
    { title: "Hobbies & Interests", description: "Bercerita tentang hobi kesukaanmu.", progress: 0, href: "/modules/hobbies" }
  ];

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24 md:pb-12 gap-6">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Learning Modules</h1>
        <p className="text-sm text-foreground/60 mt-1">Pilih materi yang ingin kamu pelajari</p>
      </header>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Cari modul..." 
          className="w-full bg-card border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-primary transition-colors text-sm"
        />
      </div>

      <div className="flex flex-col gap-4">
        {modules.map((mod, i) => (
          <ModuleCard key={i} {...mod} />
        ))}
      </div>
    </div>
  );
}
