
interface LogoProps {
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Logo = ({ showTagline = false, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <a href="/" className="flex items-center space-x-3 group">
      <div className="relative">
        <img
          src="/logo.png"
          alt="The Build Knight Logo"
          className={`${sizeClasses[size]} object-contain transition-transform group-hover:scale-110`}
        />
        {/* Fallback SVG if logo.png doesn't exist */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-accent text-2xl">⚔️</div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`${textSizeClasses[size]} font-bold text-gradient transition-all`}>
          The Build Knight
        </span>
        {showTagline && (
          <span className="text-sm text-accent/80 font-medium -mt-1">
            Crafting Code, Forging Futures
          </span>
        )}
      </div>
    </a>
  )
}