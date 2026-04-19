'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import FadeIn from '@/components/fade-in'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const reduceMotion = useReducedMotion()

  const handleSubmit = () => {
    const subject = `Message from ${name}`
    const body = `From: ${name} (${email})\n\n${message}`
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="contact">
        <h2 className="text-2xl md:text-3xl font-semibold t-primary mb-3">Get in touch</h2>
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
            className="text-sm t-faint hover:t-muted transition-colors"
          >
            {showForm ? 'Close form' : 'Send a message'}
          </button>

          <AnimatePresence initial={false}>
            {showForm && (
              <motion.div
                initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                }
                className="overflow-hidden"
              >
                <div className="mt-4 max-w-md space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="bg-[var(--border-subtle)] border b-muted rounded-lg px-3 py-2 text-sm t-primary placeholder:t-faint focus:outline-none focus:border-emerald-500/30"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="bg-[var(--border-subtle)] border b-muted rounded-lg px-3 py-2 text-sm t-primary placeholder:t-faint focus:outline-none focus:border-emerald-500/30"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-[var(--border-subtle)] border b-muted rounded-lg px-3 py-2 text-sm t-primary placeholder:t-faint focus:outline-none focus:border-emerald-500/30 resize-none"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!name || !message}
                    className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Send via email client
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </FadeIn>
  )
}
