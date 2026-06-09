'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const services = [
  'Подстригване — 8 €',
  'Подстригване + Оформяне на брада — 11 €',
  'Оформяне на брада — 5 €',
  'Skin Fade — 9 €',
  'Skin Fade + Дизайн — 13 €',
  'Детско подстригване — 6 €',
]

// Generate time slots 11:00 – 19:00 in 30-min intervals
function generateTimeSlots(): string[] {
  const slots: string[] = []
  for (let h = 11; h < 19; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`)
    slots.push(`${h.toString().padStart(2, '0')}:30`)
  }
  slots.push('19:00')
  return slots
}

const timeSlots = generateTimeSlots()

// Get min date (today) in YYYY-MM-DD format
function getTodayStr() {
  return new Date().toISOString().split('T')[0]
}

type FormState = {
  name: string
  phone: string
  service: string
  date: string
  time: string
  message: string
}

export default function Booking() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      setError('Моля, попълнете всички задължителни полета.')
      return
    }

    setLoading(true)

    // TODO: connect to email service (Resend/EmailJS)
    // Example with Resend:
    // await fetch('/api/booking', { method: 'POST', body: JSON.stringify(form) })
    console.log('Booking submitted:', form)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setLoading(false)
    setSubmitted(true)
    setForm({ name: '', phone: '', service: '', date: '', time: '', message: '' })
  }

  return (
    <section id="booking" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Онлайн резервация</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 section-title">
            Запази Час
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Попълнете формата по-долу и ще се свържем с вас за потвърждение.
            <span className="block text-xs mt-1 text-gray-500">Fill the form and we&apos;ll confirm your appointment.</span>
          </p>
        </motion.div>

        {/* Working hours notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 bg-gold/8 border border-gold/25 rounded-lg px-4 py-3 mb-8 text-sm"
        >
          <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span className="text-gray-300">
            Работно време: <span className="text-gold font-medium">Вт–Сб, 11:00–19:00</span>
            <span className="text-gray-500 ml-2">| Нед–Пон: почивен ден</span>
          </span>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface-2 border border-border rounded-2xl p-6 sm:p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Заявката е изпратена!</h3>
              <p className="text-gray-400 mb-2">
                Благодарим Ви! Ще се свържем с Вас скоро за потвърждение.
              </p>
              <p className="text-gray-500 text-sm mb-6">Thank you! We&apos;ll contact you shortly to confirm.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-gold hover:text-gold-light underline text-sm transition-colors duration-200"
              >
                Изпрати нова заявка
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Име <span className="text-gray-500 font-normal">/ Name</span> <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Вашето име"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Телефон <span className="text-gray-500 font-normal">/ Phone</span> <span className="text-gold">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="088 xxx xxxx"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Услуга <span className="text-gray-500 font-normal">/ Service</span> <span className="text-gold">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="form-input appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Изберете услуга...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Row: Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Дата <span className="text-gray-500 font-normal">/ Date</span> <span className="text-gold">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={getTodayStr()}
                    value={form.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Час <span className="text-gray-500 font-normal">/ Time</span> <span className="text-gold">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="form-input appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Изберете час...</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Съобщение <span className="text-gray-500 font-normal">/ Message</span>{' '}
                  <span className="text-gray-500 text-xs">(по желание)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Допълнителни бележки или желания..."
                  value={form.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-4 rounded text-base transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Изпращане...
                  </>
                ) : (
                  'Изпрати Заявка'
                )}
              </button>

              <p className="text-center text-gray-500 text-xs">
                Ще получите потвърждение по телефона в рамките на работния ден.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
