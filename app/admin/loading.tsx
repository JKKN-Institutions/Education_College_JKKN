export default function AdminLoading() {
  return (
    <div className="p-6 lg:p-8 max-w-6xl animate-pulse">
      {/* Header skeleton */}
      <div className="mb-8">
        <div className="h-7 w-40 bg-gray-200 rounded-lg mb-2" />
        <div className="h-4 w-64 bg-gray-100 rounded-lg" />
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-gray-200 mb-3" />
            <div className="h-8 w-12 bg-gray-200 rounded mb-1" />
            <div className="h-4 w-20 bg-gray-100 rounded" />
          </div>
        ))}
      </div>

      {/* Quick actions skeleton */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="h-5 w-32 bg-gray-200 rounded mb-4" />
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-28 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>

      {/* Recent content skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="h-5 w-36 bg-gray-200 rounded mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, j) => (
                <div key={j} className="flex items-start gap-3 p-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-4 w-full bg-gray-200 rounded mb-1" />
                    <div className="h-3 w-24 bg-gray-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
