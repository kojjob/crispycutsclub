'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    userType: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <>
      {/* Hero Section with Premium Design */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 text-center bg-crispy-bg-primary overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-crispy-bg-primary via-crispy-bg-primary/95 to-crispy-bg-secondary/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-crispy-gold/20 to-crispy-gold/5"></div>
        
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Small accent text */}
          <p className="text-crispy-gold text-xs md:text-sm font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 animate-fade-in">
            Get In Touch • 24/7 Support
          </p>
          
          {/* Main title with enhanced typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-crispy-text-primary mb-8 md:mb-12 animate-fade-in tracking-tight">
            Contact Us
          </h1>
          
          {/* Decorative line */}
          <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8 md:mb-12"></div>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-crispy-text-primary/80 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            We're here to help with any questions about your grooming experience
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                  <h3 className="text-2xl font-serif font-light text-crispy-gold mb-6">Quick Contact</h3>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-crispy-gold/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-crispy-gold">✉</span>
                      </div>
                      <div>
                        <p className="text-crispy-text-secondary text-sm mb-1">Email Us</p>
                        <a href="mailto:hello@crispycutsclub.com" className="text-crispy-text-primary hover:text-crispy-gold transition-colors">
                          hello@crispycutsclub.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-crispy-gold/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-crispy-gold">☎</span>
                      </div>
                      <div>
                        <p className="text-crispy-text-secondary text-sm mb-1">Call Us</p>
                        <a href="tel:+442079460958" className="text-crispy-text-primary hover:text-crispy-gold transition-colors">
                          +44 20 7946 0958
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-crispy-gold/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-crispy-gold">📍</span>
                      </div>
                      <div>
                        <p className="text-crispy-text-secondary text-sm mb-1">Visit Us</p>
                        <p className="text-crispy-text-primary">
                          71-75 Shelton Street<br />
                          Covent Garden<br />
                          London WC2H 9JQ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                  <h3 className="text-2xl font-serif font-light text-crispy-gold mb-6">Business Hours</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-crispy-text-secondary">Monday - Friday</span>
                      <span className="text-crispy-text-primary">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-crispy-text-secondary">Saturday</span>
                      <span className="text-crispy-text-primary">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-crispy-text-secondary">Sunday</span>
                      <span className="text-crispy-text-primary">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-crispy-border-primary">
                    <p className="text-sm text-crispy-text-secondary">
                      Emergency support available 24/7 for active members
                    </p>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                  <h3 className="text-2xl font-serif font-light text-crispy-gold mb-6">Department Contacts</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-crispy-text-secondary text-sm mb-1">Client Support</p>
                      <a href="mailto:support@crispycutsclub.com" className="text-crispy-text-primary hover:text-crispy-gold transition-colors text-sm">
                        support@crispycutsclub.com
                      </a>
                    </div>
                    <div>
                      <p className="text-crispy-text-secondary text-sm mb-1">Barber Network</p>
                      <a href="mailto:barbers@crispycutsclub.com" className="text-crispy-text-primary hover:text-crispy-gold transition-colors text-sm">
                        barbers@crispycutsclub.com
                      </a>
                    </div>
                    <div>
                      <p className="text-crispy-text-secondary text-sm mb-1">Agency Services</p>
                      <a href="mailto:agencies@crispycutsclub.com" className="text-crispy-text-primary hover:text-crispy-gold transition-colors text-sm">
                        agencies@crispycutsclub.com
                      </a>
                    </div>
                    <div>
                      <p className="text-crispy-text-secondary text-sm mb-1">Press & Media</p>
                      <a href="mailto:press@crispycutsclub.com" className="text-crispy-text-primary hover:text-crispy-gold transition-colors text-sm">
                        press@crispycutsclub.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 md:p-12 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                  <h3 className="text-3xl font-serif font-light text-crispy-gold mb-8">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm text-crispy-text-secondary">
                          First Name *
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm text-crispy-text-secondary">
                          Last Name *
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm text-crispy-text-secondary">
                          Email Address *
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm text-crispy-text-secondary">
                          Phone Number
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+44 20 1234 5678"
                        />
                      </div>
                    </div>

                    {/* User Type & Subject */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="userType" className="text-sm text-crispy-text-secondary">
                          I am a *
                        </Label>
                        <Select
                          value={formData.userType}
                          onValueChange={(value) => setFormData({ ...formData, userType: value })}
                        >
                          <SelectTrigger id="userType">
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="client">Client</SelectItem>
                            <SelectItem value="barber">Barber</SelectItem>
                            <SelectItem value="agency">Agency</SelectItem>
                            <SelectItem value="shelter">Shelter Representative</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-sm text-crispy-text-secondary">
                          Subject *
                        </Label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-sm text-crispy-text-secondary">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-crispy-text-primary mb-4">
              Find Us
            </h2>
            <p className="text-crispy-text-secondary font-light">
              Located in the heart of Covent Garden, London
            </p>
          </div>
          
          <div className="aspect-[21/9] bg-crispy-bg-secondary/50 border border-crispy-border-primary overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1487383138584!2d-0.12473648422926!3d51.51028057963643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b90d89e07b%3A0x5d7f67b1b47d0a98!2sCovent%20Garden%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1625151567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crispy Cuts Club Location"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-crispy-text-primary mb-8">
            Quick Answers
          </h2>
          <p className="text-lg text-crispy-text-secondary mb-8 font-light">
            Can't find what you're looking for? Check our <Link href="/faq" className="text-crispy-gold hover:underline">full FAQ</Link>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" asChild>
              <Link href="/how-it-works">
                How It Works
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}