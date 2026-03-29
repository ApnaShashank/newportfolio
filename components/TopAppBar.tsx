'use client';

export default function TopAppBar() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
      <nav className="flex justify-between items-center px-8 md:px-20 py-6 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">terminal</span>
            <span className="text-xl font-light italic tracking-tighter text-zinc-100 font-headline">
              APNASHASHANK
            </span>
          </div>
        <div className="hidden md:flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-label text-zinc-400">STATUS:</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-label font-bold text-primary">AVAILABLE FOR FREELANCE & FULL-TIME</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-label text-zinc-600 px-2">|</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-label text-zinc-400">
            GLOBAL COLLABORATION
          </span>
        </div>
        <a 
          href="mailto:shashank8808108802@gmail.com?subject=Project%20Inquiry"
          className="bg-primary text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] sharp-border hover:scale-105 transiton-all duration-300 hover-target cursor-pointer block"
        >
          SAY HELLO
        </a>
      </nav>
    </header>
  );
}
