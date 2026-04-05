import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ModuleCardProps {
  title: string;
  description: string;
  progress: number;
  imageUrl?: string;
  href: string;
}

export default function ModuleCard({ title, description, progress, imageUrl, href }: ModuleCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-card flex items-start gap-4 p-4 rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all">
        {/* Placeholder for Image or Real Image */}
        <div className="flex-shrink-0 w-20 h-20 bg-secondary rounded-xl overflow-hidden relative border border-primary/10">
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-primary font-bold text-2xl">
              {title.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="flex-grow flex flex-col justify-between h-20">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{title}</h3>
            <p className="text-xs text-foreground/60 line-clamp-2 mt-0.5">{description}</p>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-3 w-full mt-2">
            <div className="flex-grow h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-medium text-primary w-8 text-right">{progress}%</span>
          </div>
        </div>
        
        <div className="flex-shrink-0 self-center text-border group-hover:text-primary transition-colors">
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
