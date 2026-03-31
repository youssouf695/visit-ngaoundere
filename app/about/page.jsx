'use client'

import { motion } from 'framer-motion'
import {
  FaGithub, FaLinkedin, FaEnvelope, FaCode,
  FaReact, FaNodeJs, FaMapMarkedAlt,
  FaHeart, FaLaptopCode, FaPhone, FaWhatsapp, FaGlobe,
  FaPaintBrush, FaFigma, FaCloud, FaBug, FaBrain,
  FaDatabase
} from 'react-icons/fa'

export default function AboutPage() {
  const skills = [
    { name: 'Next.js', icon: FaCode },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'PostgreSQL', icon: FaDatabase },
    { name: 'TailwindCSS', icon: FaPaintBrush },
    { name: 'API Design', icon: FaCode },
    { name: 'Photoshop', icon: FaPaintBrush },
    { name: 'Illustrator', icon: FaPaintBrush },
    { name: 'Canva', icon: FaPaintBrush },
    { name: 'Figma', icon: FaFigma },
    { name: 'Vercel', icon: FaCloud },
    { name: 'Sentry', icon: FaBug },
    { name: 'Machine Learning', icon: FaBrain }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 mb-6 shadow-xl">
            <FaLaptopCode className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À propos du <span className="gradient-text">développeur</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionné par le web, le design et les technologies modernes, je crée des expériences digitales uniques
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 mb-8 text-center"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <FaLaptopCode className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white" />
          </div>

          <h2 className="text-2xl font-bold mt-4 mb-2">Youssoufa Njupuen</h2>
          <span className="text-gray-500 font-medium mb-4">|| Freelance - Services ||</span>
          <p className="text-orange-500 font-medium mb-4">UI/UX Designer • Web Developer • Mobile App Developer</p>
          <p className="text-gray-600 max-w-md mx-auto">
            Basé à Ngaoundéré, passionné par la création d'applications web modernes, le design et l'intelligence artificielle.
          </p>

          {/* Social */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <a href="https://github.com/youssouf695" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              <FaGithub className="w-5 h-5" />
            </a>

            <a href="https://www.linkedin.com/in/youssoufa-njupuen-aa566b275" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a href="mailto:youssoufanjupuen@gmail.com" className="p-3 bg-gray-100 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              <FaEnvelope className="w-5 h-5" />
            </a>

            <a href="tel:+237695121070" className="p-3 bg-gray-100 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              <FaPhone className="w-5 h-5" />
            </a>

            <a href="https://wa.me/237695121070" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              <FaWhatsapp className="w-5 h-5" />
            </a>

            <a href="https://njupuen.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              <FaGlobe className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Compétences techniques</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.02 }}
                className="glass-card p-4 text-center hover:scale-105 transition-transform"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ce site */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaMapMarkedAlt className="w-5 h-5 text-orange-500" />
            Pourquoi ce site ?
          </h2>

          <p className="text-gray-600 mb-4">
            Ce guide a été créé spécialement pour les participants d'IndabaX Cameroun 2026 à Ngaoundéré. 
            L'objectif est de vous aider à découvrir la ville entre deux sessions de conférence.
          </p>

          <div className="bg-orange-50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm text-orange-700">
              <FaHeart className="w-4 h-4" />
              <span>100% gratuit - Créé avec passion pour la communauté</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}