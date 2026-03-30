'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const EMAILJS_SERVICE_ID = 'service_jytlvlo'
const EMAILJS_TEMPLATE_ID = 'template_g21cpao'
const EMAILJS_PUBLIC_KEY = 'i2KfsFT93tvAB_WE7'

export default function ContactForm() {
  const formRef = useRef()
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setStatus({ 
          type: 'success', 
          message: 'Message envoye avec succes ! Je vous repondrai rapidement.' 
        })
        formRef.current.reset()
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setStatus({ 
        type: 'error', 
        message: 'Erreur lors de l\'envoi. Veuillez reessayer plus tard.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md border border-gray-100">

      {/* NOM */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          <FaUser className="inline mr-2 text-orange-500" />
          Nom complet
        </label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
          placeholder="Votre nom"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          <FaEnvelope className="inline mr-2 text-orange-500" />
          Email
        </label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
          placeholder="votre.email@exemple.com"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          <FaComment className="inline mr-2 text-orange-500" />
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none"
          placeholder="Votre message..."
        />
      </div>

      {/* STATUS */}
      <AnimatePresence>
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl flex items-center gap-3 text-sm ${
              status.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {status.type === 'success' ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BUTTON */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
      >
        <FaPaperPlane />
        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
      </motion.button>

    </form>
  )
}