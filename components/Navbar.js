export default function Navbar() {
  return (
    <nav className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
      <div className="text-gold text-xl font-serif">RTO<span className="text-white">Luxury</span></div>
      <div className="flex items-center gap-4">
        <span className="text-muted text-sm hidden sm:inline">🔵 Online</span>
        <div className="w-8 h-8 rounded-full bg-gold text-dark flex items-center justify-center font-bold">A</div>
      </div>
    </nav>
  );
}
