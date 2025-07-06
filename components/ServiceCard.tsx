import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: string
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Card className="group relative h-full border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
      <CardHeader className="text-center">
        {/* Icon */}
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 relative">
          <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
          <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
            <span className="text-crispy-gold text-xl md:text-2xl">{icon}</span>
          </div>
        </div>
        <CardTitle className="text-xl md:text-2xl font-serif font-light text-crispy-text-primary tracking-wide">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center flex flex-col flex-grow">
        <CardDescription className="text-sm md:text-base text-crispy-text-secondary mb-8 md:mb-10 leading-relaxed font-light flex-grow">
          {description}
        </CardDescription>
        <Button variant="outline" asChild className="mt-auto">
          <Link href={href}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}