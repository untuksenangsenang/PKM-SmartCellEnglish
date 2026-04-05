import Link from "next/link";
import { ArrowLeft, User, Settings, LogOut, Award, BookOpen, Star } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      {/* Top App Bar */}
      <div className="sticky top-0 w-full bg-card border-b border-border z-40 px-4 h-16 flex items-center shadow-sm">
        <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-secondary/50 text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="font-bold text-foreground flex-1 text-center">My Profile</h2>
        <ThemeToggle />
      </div>

      <div className="p-4 max-w-2xl mx-auto w-full gap-6 flex flex-col mt-4">
        
        {/* Profile Card */}
        <div className="bg-card rounded-3xl border border-border p-6 shadow-sm flex flex-col items-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center shadow-inner mb-4 relative">
            <span className="text-4xl font-bold text-primary">A</span>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-card rounded-full flex items-center justify-center shadow">
              <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Andi Setiawan</h1>
          <p className="text-foreground/50 text-sm mt-1">Siswa - Kelompok Belajar A</p>
          
          <div className="flex items-center gap-2 mt-4 px-4 py-1.5 bg-yellow-50 rounded-full border border-yellow-200">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-yellow-700">125 Koin Belajar</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card rounded-2xl border border-border p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-foreground">12</span>
              <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Modul Selesai</span>
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-foreground">3</span>
              <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Sertifikat</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col mt-2">
          <button className="flex items-center justify-between p-5 hover:bg-secondary/30 transition-colors border-b border-border/50">
            <div className="flex items-center gap-4">
              <User className="w-5 h-5 text-foreground/60" />
              <span className="font-medium text-foreground">Edit Profil</span>
            </div>
            <ArrowLeft className="w-5 h-5 rotate-180 text-border" />
          </button>
          <button className="flex items-center justify-between p-5 hover:bg-secondary/30 transition-colors border-b border-border/50">
            <div className="flex items-center gap-4">
              <Settings className="w-5 h-5 text-foreground/60" />
              <span className="font-medium text-foreground">Pengaturan Akun</span>
            </div>
            <ArrowLeft className="w-5 h-5 rotate-180 text-border" />
          </button>
          <button className="flex items-center justify-between p-5 hover:bg-red-50 transition-colors group">
            <div className="flex items-center gap-4">
              <LogOut className="w-5 h-5 text-red-500 group-hover:text-red-600" />
              <span className="font-medium text-red-500 group-hover:text-red-600">Keluar</span>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
