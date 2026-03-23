export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f0e8' }}>
      <div className="text-center">
        <div
          className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin mx-auto mb-4"
          style={{ borderColor: '#006837', borderTopColor: 'transparent' }}
        />
        <p className="text-sm font-medium" style={{ color: '#006837' }}>Loading…</p>
      </div>
    </div>
  );
}
