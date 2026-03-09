'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, CheckCircle, ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7 text-gold" />
              </div>

              <h2 className="mt-6 text-center font-display text-2xl text-navy font-semibold">
                Reset your password
              </h2>
              <p className="mt-2 text-center font-sans text-sm text-charcoal/60">
                Enter your email address and we will send you instructions to reset
                your password.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="block font-sans text-sm font-medium text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold text-navy-dark font-sans font-medium rounded-lg hover:bg-gold-light transition-all duration-300 shadow-md"
                >
                  Send Reset Instructions
                </button>
              </form>

              <Link
                href="/auth/login"
                className="mt-6 flex items-center justify-center gap-2 font-sans text-sm text-charcoal/60 hover:text-gold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to login
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>

              <h2 className="mt-6 font-display text-2xl text-navy font-semibold">
                Check your email and SMS
              </h2>
              <p className="mt-2 font-sans text-sm text-charcoal/60">
                We have sent password reset instructions to{' '}
                <span className="font-medium text-navy">{email}</span>
              </p>

              <Link
                href="/auth/login"
                className="inline-flex items-center mt-8 px-6 py-3 bg-gold text-navy-dark font-sans font-medium rounded-lg hover:bg-gold-light transition-all duration-300"
              >
                Back to Login
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
