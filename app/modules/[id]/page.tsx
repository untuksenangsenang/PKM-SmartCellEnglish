"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen, Volume2, CheckCircle2 } from "lucide-react";

export default function ModuleDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const router = useRouter();

  // Mock content for demonstration based on the module requested
  const getModuleTitle = () => {
    switch (unwrappedParams.id) {
      case "greetings": return "Greetings & Introductions";
      case "routines": return "Daily Routines";
      case "family": return "Family & Friends";
      case "hobbies": return "Hobbies & Interests";
      default: return `Modul Pilihan: ${unwrappedParams.id}`;
    }
  };

  const handleComplete = () => {
    // 1. Update Daily Goals
    const savedGoals = localStorage.getItem("smart_cell_goals");
    let goals = savedGoals ? JSON.parse(savedGoals) : { completed: 1, total: 3 };
    if (goals.completed < goals.total) {
      goals.completed += 1;
    }
    localStorage.setItem("smart_cell_goals", JSON.stringify(goals));

    // 2. Update Continue Learning
    localStorage.setItem("smart_cell_recent", JSON.stringify({
      id: unwrappedParams.id,
      title: getModuleTitle(),
      subtitle: "Terakhir Dipelajari"
    }));

    // 3. Go back or to dashboard
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      {/* Top App Bar */}
      <div className="sticky top-0 w-full bg-card border-b border-border z-40 px-4 h-16 flex items-center justify-between shadow-sm">
        <Link href="/modules" className="p-2 -ml-2 rounded-full hover:bg-secondary/50 text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="font-bold text-foreground text-sm line-clamp-1">{getModuleTitle()}</h2>
        <div className="w-9 h-9" /> {/* Spacer */}
      </div>

      <div className="p-4 max-w-2xl mx-auto w-full gap-6 flex flex-col">
        
        {/* Banner/Hero */}
        <div className="w-full aspect-[4/3] sm:aspect-[21/9] bg-gradient-to-tr from-primary to-blue-400 rounded-3xl relative overflow-hidden shadow-lg flex items-center justify-center p-6">
          <BookOpen className="w-24 h-24 text-white opacity-20 absolute -right-4 -bottom-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center z-10 leading-snug drop-shadow-md">
            Materi: {getModuleTitle()}
          </h1>
        </div>

        {/* Content Section */}
        <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
          <p className="text-foreground/80 leading-relaxed text-sm">
            Halo! Pada modul ini, kita akan fokus mempelajari kosakata baru dan cara mengucapkannya yang benar. Pelajari setiap poin dengan saksama dan cobalah baca kembali sambil meniru pengucapan.
          </p>
        </div>

        {/* Vocabulary List */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-foreground px-2">Vocabulary (Kosakata)</h3>
          
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-card p-4 rounded-2xl border border-border shadow-sm flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">Contoh Kata {item}</span>
                <span className="text-sm text-foreground/60 italic">/kosa kata bahasa indonesia/</span>
              </div>
              <button className="p-3 bg-secondary rounded-full active:scale-95 transition-transform text-primary group-hover:bg-primary group-hover:text-white">
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-6 pb-2">
          <button 
            onClick={handleComplete}
            className="w-full bg-primary flex items-center justify-center gap-2 text-primary-foreground font-semibold py-4 rounded-2xl text-lg hover:bg-primary/90 transition-colors shadow"
          >
            Tandai Selesai <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
