import Link from "next/link";
import { BookOpen, Video, Mic, CheckSquare, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-6 pb-24 md:pb-12 gap-8">
      {/* Header & Greeting */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Hi, Student 👋</h1>
          <p className="text-sm text-foreground/60">Ready to learn English today?</p>
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
          <span className="text-xl font-bold text-primary">A</span>
        </div>
      </section>

      {/* Progress Tracker Card */}
      <section className="bg-gradient-to-br from-primary to-blue-500 rounded-3xl p-6 text-white shadow-lg overflow-hidden relative">
        <div className="relative z-10 flex gap-4 items-center">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
            <Award className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-lg">Daily Goal</h2>
            <p className="text-white/80 text-sm">2 of 3 lessons completed</p>
            <div className="w-full h-2 bg-white/30 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-white rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      {/* Main Navigation Menu */}
      <section>
        <h2 className="text-lg font-bold text-foreground mb-4">Let's Explore</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/modules" className="group">
            <div className="bg-card hover:bg-secondary/20 border border-border hover:border-primary/50 transition-all rounded-3xl p-5 flex flex-col items-center justify-center gap-3 h-36 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">Modules</h3>
            </div>
          </Link>
          
          <Link href="/videos" className="group">
            <div className="bg-card hover:bg-secondary/20 border border-border hover:border-primary/50 transition-all rounded-3xl p-5 flex flex-col items-center justify-center gap-3 h-36 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">Videos</h3>
            </div>
          </Link>
          
          <Link href="/podcast" className="group">
            <div className="bg-card hover:bg-secondary/20 border border-border hover:border-primary/50 transition-all rounded-3xl p-5 flex flex-col items-center justify-center gap-3 h-36 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">Speaking</h3>
            </div>
          </Link>

          <Link href="/quiz" className="group">
            <div className="bg-card hover:bg-secondary/20 border border-border hover:border-primary/50 transition-all rounded-3xl p-5 flex flex-col items-center justify-center gap-3 h-36 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckSquare className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">Quiz</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Suggested Next Module */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Continue Learning</h2>
          <Link href="/modules" className="text-primary text-sm font-medium hover:underline">See All</Link>
        </div>
        <Link href="/modules/greetings">
          <div className="bg-card flex gap-4 p-4 rounded-2xl border border-border shadow-sm hover:shadow border-l-4 border-l-primary items-center">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground text-sm">Greetings & Introductions</h4>
              <p className="text-xs text-foreground/60 mt-1">Modul 1</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary bg-secondary/50">
              <span className="text-xs font-bold">▶</span>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
