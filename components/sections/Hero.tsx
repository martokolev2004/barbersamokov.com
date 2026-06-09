'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern texture-lines"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gold circle top-right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold/10" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-gold/5" />
        {/* Bottom-left accent */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-gold/8" />
        {/* Subtle radial gradient glow */}
        <div className="absolute inset-0 bg-radial-gradient" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)'
        }} />
        {/* Barberpole-inspired vertical accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Stars / small dots decoration */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-gold/40" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-gold/20" />
      <div className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full bg-gold/30" />
      <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-gold/25" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo / brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="6" cy="6" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <line x1="20" y1="4" x2="8.12" y2="15.88"/>
            <line x1="14.47" y1="14.48" x2="20" y2="20"/>
            <line x1="8.12" y1="8.12" x2="12" y2="12"/>
          </svg>
          <span className="text-white font-bold text-xl tracking-[0.25em] uppercase">
            BARBER <span className="text-gold">SAMOKOV</span>
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="block text-white">Изглеждай.</span>
          <span className="block text-gold-gradient">Усещай.</span>
          <span className="block text-white">Впечатлявай.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Професионални мъжки прически в Самоков
          <span className="block text-sm mt-1 text-gray-500">Professional men&apos;s haircuts in Samokov</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo('#booking')}
            className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-4 rounded text-base transition-all duration-200 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 active:translate-y-0 min-w-[180px]"
          >
            Запази час
          </button>
          <button
            onClick={() => scrollTo('#gallery')}
            className="border border-white/30 text-white hover:border-gold hover:text-gold font-semibold px-8 py-4 rounded text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-w-[180px]"
          >
            Виж нашата работа
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-14 text-sm text-gray-500"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-white font-medium">4.8</span>
            <span>— 37 отзива в Google</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#services')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-gold transition-colors duration-200"
        aria-label="Виж повече"
      >
        <span className="text-xs tracking-widest uppercase">Виж повече</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </motion.div>
      </motion.button>
    </section>
  )
}
