export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border py-8 mt-auto md:mb-0 mb-16">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-2">
        <div className="w-12 h-1 bg-primary rounded-full mb-2"></div>
        <h3 className="font-semibold text-primary">Smart Cell English</h3>
        <p className="text-sm text-foreground/70 max-w-md">
          Platform Microlearning Bahasa Inggris interaktif untuk anak binaan LPKA Kelas II B Wonosari.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-foreground/50 font-medium">
          <span>&copy; {new Date().getFullYear()} Tim PKM-PM Universitas Ahmad Dahlan</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Mitra LPKA Kelas II B Wonosari</span>
        </div>
      </div>
    </footer>
  );
}
