'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// 6 photos — 3×2 grid (3 columns, 2 rows)
const galleryItems = [
  { id: 1, file: '0-02-05-358b5c212e7b2d89301ecccf8606e49b75b0aff573e7b039f9597c619b969925_1dbf503a55c48f.jpg' },
  { id: 2, file: '0-02-05-4ff5c842ec8a4a5349fcc2705c2cd7b104e7fe731e33d6a687e4903741bde2a3_1dbf503a562014.jpg' },
  { id: 3, file: '0-02-05-88cf144c4bd2c50e7900a2d98b74ba875f011475c4699750f2619c740895d5f4_1dbf503a55d466.jpg' },
  { id: 4, file: '0-02-05-a5e1410147229ec840c353614c4c8f4f5dd39cdb267af949a28e7ba94730557e_1dbf503a55b5ce.jpg' },
  { id: 5, file: '0-02-05-a6ce12fb4da596851ef7af6c8b1559b817abe48034b4d12e5e9cd0264e0ea499_1dbf503a566922.jpg' },
  { id: 6, file: '0-02-05-c12817823c9dea3b432352ebf107b3faf4d5bd2c7800715d99172828d5956fc6_1dbf503a55dbea.jpg' },
]

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
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Портфолио</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 section-title">
            Нашата Работа
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Разгледайте резултатите от нашите майстори. Всяка прическа е индивидуален проект.
          </p>
        </motion.div>

        {/* 3×2 even grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onClick={() => setLightboxId(item.id)}
              className="relative aspect-square overflow-hidden rounded-xl bg-surface-2 border border-border hover:border-gold/40 transition-all duration-300 group"
              aria-label={`Виж снимка ${item.id}`}
            >
              <Image
                src={`/images/${item.file}`}
                alt={`Barber Shop Samokov — снимка ${item.id}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold/90 rounded-full p-3">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
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
              className="relative max-w-sm sm:max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxId(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Затвори"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <div className="relative aspect-square bg-surface-2 rounded-xl overflow-hidden border border-border">
                {current && (
                  <Image
                    src={`/images/${current.file}`}
                    alt="Barber Shop Samokov"
                    fill
                    className="object-cover"
                    sizes="512px"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-gold text-sm">@barber_shop_samokov_</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const idx = galleryItems.findIndex((g) => g.id === lightboxId)
                    setLightboxId(galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length].id)
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
                    setLightboxId(galleryItems[(idx + 1) % galleryItems.length].id)
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
