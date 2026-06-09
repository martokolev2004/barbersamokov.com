'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Replace with actual photos from @barber_shop_samokov_ Instagram
// Recommended dimensions: at least 800x1000px (portrait) for best masonry effect
const galleryItems = [
  { id: 1, label: 'Skin Fade', category: 'Fade', aspect: 'tall' },
  { id: 2, label: 'Класическа прическа', category: 'Classic', aspect: 'square' },
  { id: 3, label: 'Skin Fade + Дизайн', category: 'Design', aspect: 'tall' },
  { id: 4, label: 'Оформяне на брада', category: 'Beard', aspect: 'square' },
  { id: 5, label: 'Mid Fade', category: 'Fade', aspect: 'tall' },
  { id: 6, label: 'Текстурирана прическа', category: 'Classic', aspect: 'square' },
  { id: 7, label: 'Дизайн — линии', category: 'Design', aspect: 'tall' },
  { id: 8, label: 'Детска прическа', category: 'Classic', aspect: 'square' },
  { id: 9, label: 'Taper Fade', category: 'Fade', aspect: 'tall' },
]

// Decorative SVG pattern for placeholder slots
function PlaceholderPattern({ id, label, category }: { id: number; label: string; category: string }) {
  const patterns: Record<string, string> = {
    Fade: '#c9a84c22',
    Classic: '#ffffff08',
    Design: '#c9a84c15',
    Beard: '#ffffff10',
  }
  const bg = patterns[category] || '#ffffff08'

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4"
      style={{ background: bg }}
    >
      {/* Scissors decorative icon */}
      <svg className="w-10 h-10 text-gold/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
      <div className="text-center">
        <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{label}</p>
        <p className="text-gold/40 text-xs mt-0.5">#{id.toString().padStart(2, '0')}</p>
      </div>
      {/* Replace comment */}
      <p className="absolute bottom-2 left-2 right-2 text-center text-gray-600 text-[10px] leading-tight">
        {/* Replace with actual photos from @barber_shop_samokov_ Instagram */}
        📸 Добавете снимка тук
      </p>
    </div>
  )
}

export default function Gallery() {
  const [lightboxId, setLightboxId] = useState<number | null>(null)
  const current = galleryItems.find((g) => g.id === lightboxId)

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Портфолио</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 section-title">
            Нашата Работа
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Разгледайте резултатите от нашите майстори. Всяка прическа е индивидуален проект.
          </p>
          <a
            href="https://www.instagram.com/barber_shop_samokov_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Вижте повече в Instagram @barber_shop_samokov_
          </a>
        </motion.div>

        {/* Masonry-style grid using CSS columns */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setLightboxId(item.id)}
                className={`relative w-full overflow-hidden rounded-xl bg-surface-2 border border-border hover:border-gold/40 transition-all duration-300 group block ${
                  item.aspect === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
                }`}
                aria-label={`Виж снимка: ${item.label}`}
              >
                {/* Replace with actual photos from @barber_shop_samokov_ Instagram */}
                <PlaceholderPattern id={item.id} label={item.label} category={item.category} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold/90 rounded-full p-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-black/60 text-gold text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/barber_shop_samokov_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold/40 hover:bg-gold/10 text-gold font-semibold px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Вижте всички снимки в Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lightbox-overlay"
            onClick={() => setLightboxId(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Преглед на снимка"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxId(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Затвори"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <div className="relative aspect-[3/4] bg-surface-2 rounded-xl overflow-hidden border border-border">
                {current && (
                  <PlaceholderPattern id={current.id} label={current.label} category={current.category} />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-medium">{current?.label}</p>
                  <p className="text-gold text-sm">@barber_shop_samokov_</p>
                </div>
              </div>

              {/* Nav arrows */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const idx = galleryItems.findIndex((g) => g.id === lightboxId)
                    const prev = galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length]
                    setLightboxId(prev.id)
                  }}
                  className="text-white/50 hover:text-gold transition-colors p-2"
                  aria-label="Предишна"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <span className="text-gray-500 text-sm self-center">
                  {galleryItems.findIndex((g) => g.id === lightboxId) + 1} / {galleryItems.length}
                </span>
                <button
                  onClick={() => {
                    const idx = galleryItems.findIndex((g) => g.id === lightboxId)
                    const next = galleryItems[(idx + 1) % galleryItems.length]
                    setLightboxId(next.id)
                  }}
                  className="text-white/50 hover:text-gold transition-colors p-2"
                  aria-label="Следваща"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
