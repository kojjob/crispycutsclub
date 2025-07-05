export default function Loading() {
  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-crispy-gold/20 rounded-full animate-ping"></div>
            <div className="relative w-full h-full bg-crispy-gold rounded-full flex items-center justify-center">
              <span className="text-crispy-black font-bold text-2xl">CC</span>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-serif text-crispy-white">
            Loading
          </h2>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-1.5 h-1.5 bg-crispy-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1.5 h-1.5 bg-crispy-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1.5 h-1.5 bg-crispy-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}