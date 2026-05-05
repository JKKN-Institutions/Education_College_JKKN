'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#f5f0e8' }}>
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#006837' }}>Something went wrong</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 text-white font-semibold rounded-lg transition-colors"
            style={{ backgroundColor: '#006837' }}
          >
            Try Again
          </button>
          <a href="/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 font-semibold rounded-lg border-2 transition-colors text-[#006837] border-[#006837] hover:bg-[#006837] hover:text-white">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
