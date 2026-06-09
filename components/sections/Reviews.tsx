'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Ismail Mesutoglu',
    initials: 'IM',
    text: 'Наистина талантлив бръснар, подстрига ме точно както описах. Браво!',
    stars: 5,
    timeAgo: '2 години назад',
  },
  {
    name: 'Eli Fertzer',
    initials: 'EF',
    text: 'Добър стилен салон с достъпни цени. Собственикът е много приятелски настроен.',
    stars: 5,
    timeAgo: '1 година назад',
  },
  {
    name: 'Radostin Aydarov',
    initials: 'RA',
    text: 'Невероятно студио.',
    stars: 5,
    timeAgo: '3 години назад',
  },
  {
    name: 'Chavdar "Chocho" Marinov',
    initials: 'CM',
    text: 'Най-добрият в града.',
    stars: 5,
    timeAgo: '2 години назад',
  },
  {
    name: 'Тодор Петров',
    initials: 'ТП',
    text: 'Бобо работи перфектно и на много високо ниво!',
    stars: 5,
    timeAgo: '4 години назад',
  },
  {
    name: 'Niki Georgiev',
    initials: 'NG',
    text: 'Най-добрият бръснар, много съм доволен!!',
    stars: 5,
    timeAgo: '4 години назад',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-gold' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Отзиви</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 section-title">
            Какво Казват Клиентите
          </h2>
        </motion.div>

        {/* Overall rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-4 bg-surface-2 border border-border rounded-2xl px-6 py-4">
            <div className="text-center">
              <div className="text-5xl font-black text-gold leading-none">4.8</div>
              <div className="text-gray-400 text-xs mt-1">от 5</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <StarRating count={5} />
              <p className="text-gray-400 text-sm mt-1">37 отзива в Google</p>
              <a
                href="https://maps.app.goo.gl/barbersamokov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-xs hover:text-gold-light transition-colors duration-200 flex items-center gap-1 mt-0.5"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Виж в Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-surface-2 border border-border rounded-xl p-5 hover:border-gold/25 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 group"
            >
              {/* Header row */}
              <div className="flex items-center gap-3 mb-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="text-gold font-bold text-sm">{review.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.timeAgo}</p>
                </div>
                {/* Google G icon */}
                <div className="ml-auto flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating count={review.stars} />
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        {/* View all on Google button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://maps.app.goo.gl/barbersamokov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-border hover:border-gold/40 text-gray-300 hover:text-gold font-medium px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Виж всички отзиви в Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
