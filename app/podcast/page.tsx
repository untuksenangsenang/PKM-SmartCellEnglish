import PodcastPlayer from "@/components/PodcastPlayer";
import { Mic2, Headphones } from "lucide-react";

export default function PodcastPage() {
  const podcasts = [
    { title: "The Fox and the Grapes", duration: "3:20", speaker: "Kak Budi" },
    { title: "The Lion and the Mouse", duration: "4:05", speaker: "Kak Siti" },
    { title: "The Thirsty Crow", duration: "2:50", speaker: "Kak Budi" }
  ];

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-32 gap-6 relative">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Speaking Time</h1>
        <p className="text-sm text-foreground/60 mt-1">Dengarkan cerita dan berlatih bicara.</p>
      </header>

      <div className="bg-primary/10 rounded-2xl p-6 flex items-center justify-center border border-primary/20 mt-2 mb-4">
        <Headphones className="w-16 h-16 text-primary opacity-80" />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-lg flex items-center gap-2">
          <Mic2 className="w-5 h-5 text-primary" /> Episodes
        </h2>
        
        {podcasts.map((pod, i) => (
          <div key={i} className="bg-card p-4 rounded-xl border border-border flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group">
            <span className="w-6 text-center font-bold text-foreground/40 group-hover:text-primary">{i + 1}</span>
            <div className="flex-1">
              <h4 className="font-medium text-sm">{pod.title}</h4>
              <p className="text-xs text-foreground/60">{pod.speaker} • {pod.duration}</p>
            </div>
          </div>
        ))}
      </div>

      <PodcastPlayer />
    </div>
  );
}
