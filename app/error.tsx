'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 flex items-center justify-center">
      <div className="glass-card p-8 rounded-lg text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-white text-2xl font-bold mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-blue-200 mb-6">
          We encountered an error while loading the Gigs & Gains Guild. 
          Don't worry, we're here to help you get back on track!
        </p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="btn-primary w-full"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-secondary w-full"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
