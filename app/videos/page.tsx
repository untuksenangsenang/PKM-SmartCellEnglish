"use client";

import { useState } from "react";
import { CheckCircle, PlayCircle } from "lucide-react";

export default function VideosPage() {
  const [videos, setVideos] = useState([
    { id: 1, title: "How to introduce yourself 👋", duration: "3:45", completed: true },
    { id: 2, title: "Numbers & Counting 🔢", duration: "4:20", completed: false },
    { id: 3, title: "Colors around us 🎨", duration: "5:10", completed: false },
  ]);

  const toggleComplete = (id: number) => {
    setVideos(videos.map(v => v.id === id ? { ...v, completed: !v.completed } : v));
  };

  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24 md:pb-12 gap-6">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Learning Videos</h1>
        <p className="text-sm text-foreground/60 mt-1">Tonton dan pelajari pengucapannya!</p>
      </header>

      {/* Featured Video Player */}
      <div className="w-full aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <PlayCircle className="w-16 h-16 text-white/80 z-10 cursor-pointer hover:scale-110 transition-transform" />
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <h2 className="font-semibold text-lg">Playlist</h2>
        {videos.map((vid) => (
          <div key={vid.id} className="bg-card p-3 rounded-xl border border-border flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
              <PlayCircle className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h4 className="font-medium text-sm text-foreground">{vid.title}</h4>
              <p className="text-xs text-foreground/60 mt-0.5">{vid.duration}</p>
            </div>
            <button 
              onClick={() => toggleComplete(vid.id)}
              className={`p-2 rounded-full transition-colors ${vid.completed ? "text-green-500 bg-green-50" : "text-border bg-transparent border border-border"}`}
            >
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
