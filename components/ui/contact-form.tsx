'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website')
      const body = encodeURIComponent(
        `Hi Aryan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      )
      const mailtoLink = `mailto:aryanraj2713@gmail.com?subject=${subject}&body=${body}`
      
      // Open default email client (less likely to be blocked)
      const a = document.createElement('a')
      a.href = mailtoLink
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const openGmail = () => {
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website')
    const body = encodeURIComponent(
      `Hi Aryan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aryanraj2713@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="mb-16">
      <div className="text-center mb-12">
        <h2 className="section-title flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {/* Email Card */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-0.5">
                      <div className="w-full h-full rounded-2xl bg-gray-900/90 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Email</h3>
                    <a href="mailto:aryanraj2713@gmail.com" 
                       className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium">
                      aryanraj2713@gmail.com
                    </a>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-0.5">
                      <div className="w-full h-full rounded-2xl bg-gray-900/90 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/aryanraj13/" target="_blank" 
                       className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium">
                      linkedin.com/in/aryanraj13
                    </a>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-500 to-rose-500 p-0.5">
                      <div className="w-full h-full rounded-2xl bg-gray-900/90 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">GitHub</h3>
                    <a href="https://github.com/aryanraj2713" target="_blank" 
                       className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium">
                      github.com/aryanraj2713
                    </a>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 p-0.5">
                      <div className="w-full h-full rounded-2xl bg-gray-900/90 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 tracking-tight">Phone</h3>
                    <a href="tel:+918287276911"
                       className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm font-medium">
                      +91 8287276911
                    </a>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white 
                      placeholder-gray-400 focus:border-emerald-400/50 focus:bg-white/10 
                      transition-all duration-300 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white 
                      placeholder-gray-400 focus:border-emerald-400/50 focus:bg-white/10 
                      transition-all duration-300 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white 
                    placeholder-gray-400 focus:border-emerald-400/50 focus:bg-white/10 
                    transition-all duration-300 focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white 
                    placeholder-gray-400 focus:border-emerald-400/50 focus:bg-white/10 
                    transition-all duration-300 focus:outline-none resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden glass rounded-xl px-8 py-4 border-2 border-transparent
                    bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20
                    hover:from-emerald-500/30 hover:via-cyan-500/30 hover:to-blue-500/30
                    hover:border-emerald-400/50 transform transition-all duration-300 ease-out
                    hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10
                  transform transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" />
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transform transition-transform duration-1000 ease-out group-hover:translate-x-full -translate-x-full" />
                
                <div className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                      <span className="text-white font-semibold">Opening Email Client...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span className="text-lg font-semibold text-white">Send Message</span>
                    </>
                  )}
                </div>
                </button>

                <button
                  type="button"
                  onClick={openGmail}
                  className="w-full group relative overflow-hidden glass rounded-xl px-8 py-4 border-2 border-transparent
                    bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20
                    hover:from-red-500/30 hover:via-orange-500/30 hover:to-amber-500/30
                    hover:border-amber-400/50 transform transition-all duration-300 ease-out
                    hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 via-orange-400/10 to-amber-400/10
                    transform transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                    transform transition-transform duration-1000 ease-out group-hover:translate-x-full -translate-x-full" />
                  <div className="relative flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l11.985-7.99A1.5 1.5 0 0022.5 3h-21a1.5 1.5 0 00-1.485 1.723L12 12.713z"/>
                      <path d="M12 14.868L0 6.879V21a1 1 0 001 1h7v-6h8v6h7a1 1 0 001-1V6.879L12 14.868z"/>
                    </svg>
                    <span className="text-lg font-semibold text-white">Open in Gmail</span>
                  </div>
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-center p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/30">
                  <p className="text-emerald-300">✅ Email client opened! Your message is ready to send.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 rounded-xl bg-red-500/20 border border-red-400/30">
                  <p className="text-red-300">❌ Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 