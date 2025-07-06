import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: string
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative text-center p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 relative">
          <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
          <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
            <span className="text-crispy-gold text-xl md:text-2xl">{icon}</span>
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif font-light text-crispy-text-primary mb-4 md:mb-6 tracking-wide">
          {title}
        </h3>
        <p className="text-sm md:text-base text-crispy-text-secondary mb-8 md:mb-10 leading-relaxed font-light flex-grow">
          {description}
        </p>
        <Link 
          href={href}
          className="inline-block relative overflow-hidden group/btn mt-auto"
        >
          <span className="relative z-10 block bg-crispy-text-primary text-crispy-bg-primary px-6 md:px-10 py-2.5 md:py-3 font-light tracking-wider uppercase text-xs md:text-sm transition-colors duration-300 group-hover/btn:text-crispy-white dark:bg-crispy-white dark:text-crispy-black dark:group-hover/btn:text-crispy-black">
            Learn More
          </span>
          <span className="absolute inset-0 bg-crispy-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
      </div>
    </div>
  )
}