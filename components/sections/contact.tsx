'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { MessageSquare, Send } from 'lucide-react'
import FadeIn from '@/components/fade-in'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const reduceMotion = useReducedMotion()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = `Message from ${name}`
    const body = `From: ${name}${email ? ` (${email})` : ''}\n\n${message}`
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="contact">
        <h2 className="section-title mb-4">Get in touch</h2>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-emerald-400 hover:text-emerald-300 transition-colors text-lg underline underline-offset-4 decoration-emerald-400/30"
        >
          {personalInfo.email}
        </a>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm t-muted">
          {personalInfo.socials.map(s => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40"
            >
              {s.label}
            </a>
          ))}
          <a
            href={personalInfo.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40"
          >
            Schedule a call
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40"
          >
            Resume
          </a>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="hero-button hero-button-secondary"
            aria-expanded={showForm}
            aria-controls="contact-form"
          >
            <MessageSquare size={17} aria-hidden="true" />
            {showForm ? 'Close form' : 'Send a message'}
          </button>

          <AnimatePresence initial={false}>
            {showForm && (
              <motion.div
                initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.23, 1, 0.32, 1] }
                }
                className="overflow-hidden -mx-1 px-1 pb-1"
              >
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <label className="contact-field">
                      Name
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </label>
                    <label className="contact-field">
                      Email (optional)
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                  <label className="contact-field">
                    Message
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                  </label>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <button
                      type="submit"
                      disabled={!name.trim() || !message.trim()}
                      className="hero-button hero-button-primary"
                    >
                      <Send size={16} aria-hidden="true" />
                      Send via email client
                    </button>
                    <p className="contact-form-note">Opens your email app with this message.</p>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </FadeIn>
  )
}
