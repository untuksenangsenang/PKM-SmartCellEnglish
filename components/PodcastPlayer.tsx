"use client";

import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-[64px] md:bottom-0 left-0 w-full bg-primary text-primary-foreground shadow-lg z-40 transition-transform transform translate-y-0">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Track Thumbnail */}
        <div className="w-12 h-12 bg-white/20 rounded-lg flex-shrink-0 flex items-center justify-center">
          <MicPlayerIcon className="w-6 h-6 text-white" />
        </div>
        
        {/* Track Info */}
        <div className="flex-grow min-w-0">
          <h4 className="font-medium text-sm truncate">The Fox and the Grapes</h4>
          <p className="text-xs text-primary-foreground/70 truncate">Speaking Time • 3:20</p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95">
            <SkipBack className="w-5 h-5 fill-current" />
          </button>
          
          <button 
            className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow flex-shrink-0"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-1" />
            )}
          </button>
          
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95">
            <SkipForward className="w-5 h-5 fill-current" />
          </button>
        </div>
      </div>
      
      {/* Mini Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-accent" style={{ width: "35%" }}></div>
      </div>
    </div>
  );
}

function MicPlayerIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}
