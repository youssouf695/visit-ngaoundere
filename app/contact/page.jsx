'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock, FaPaperPlane, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export default function ContactPage() {
  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'youssoufanjupuen@gmail.com', link: 'mailto:youssoufanjupuen@gmail.com' },
    { icon: FaMapMarkerAlt, label: 'Localisation', value: 'Ngaoundéré, Cameroun', link: null },
    { icon: FaPhone, label: 'Téléphone', value: '+237 695 12 10 70', link: 'tel:+237695121070' },
    { icon: FaClock, label: 'Réponse', value: 'Sous 24h', link: null },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 mb-4">
            <FaPaperPlane className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Me <span className="gradient-text">contacter</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une question sur le guide, une collaboration, ou simplement pour dire bonjour ?
            N&apos;hésitez pas à m&apos;écrire.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
            <ContactForm />
          </motion.div>

          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Informations</h2>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 ">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-700 hover:text-orange-500 transition">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Me suivre</h2>
              <div className="flex gap-4">
                <a href="https://github.com/youssouf695" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 bg-gray-100  rounded-xl text-center hover:bg-orange-500 group transition-all">
                  <FaGithub className="w-6 h-6 mx-auto mb-2 group-hover:text-white" />
                  <span className="text-sm group-hover:text-white">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/youssoufa-njupuen-aa566b275" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 bg-gray-100  rounded-xl text-center hover:bg-orange-500 group transition-all">
                  <FaLinkedin className="w-6 h-6 mx-auto mb-2 group-hover:text-white" />
                  <span className="text-sm group-hover:text-white">LinkedIn</span>
                </a>
                <a href="https://wa.me/237695121070" target="_blank" rel="noopener noreferrer" className="flex-1 p-4 bg-gray-100 rounded-xl text-center hover:bg-orange-500 group transition-all">
                  <FaWhatsapp className="w-6 h-6 mx-auto mb-2 group-hover:text-white" />
                  <span className="text-sm group-hover:text-white">Whatsapp</span>
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="glass-card p-6 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-green-500 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Disponible pour des collaborations
              </div>
              <p className="text-gray-600">
                Open to work et prêt pour de nouveaux projets
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}