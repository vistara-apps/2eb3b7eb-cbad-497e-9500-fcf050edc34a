export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 flex items-center justify-center">
      <div className="glass-card p-8 rounded-lg text-center">
        <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
        <h2 className="text-white text-xl font-semibold mb-2">Loading Gigs & Gains Guild</h2>
        <p className="text-blue-200">Discovering opportunities for you...</p>
      </div>
    </div>
  );
}
