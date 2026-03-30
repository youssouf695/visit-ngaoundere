'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-10 relative bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ngaoundere<span className="text-orange-500">.</span>Tour
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Guide interactif cree specialement pour les participants d&apos;IndabaX Cameroun 2026. 
              Explorez la ville autrement.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/youssouf695" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-all group">
                <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/youssoufa-njupuen-aa566b275" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-all group">
                <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="mailto:youssoufanjupuen@gmail.com" className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 transition-all group">
                <FaEnvelope className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              {['Accueil', 'Sites', 'A propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item === 'Accueil' ? '' : item.toLowerCase() === 'sites' ? 'sites' : item.toLowerCase() === 'a propos' ? 'about' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Infos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Infos pratiques</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-500 rounded-full" />
                Conference: IndabaX 2026
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-500 rounded-full" />
                Ville: Ngaoundere
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-500 rounded-full" />
                Guide 100% gratuit
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            Fait avec <FaHeart className="w-4 h-4 text-red-500 animate-pulse" /> 
            par <a 
              href="https://njupuen.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gradient-text font-semibold hover:opacity-80 transition"
            >
              Youssoufa Njupuen
            </a>
            <span className="mx-2">•</span>
            <FaCode className="w-4 h-4" />
            Propulse par Corporate Tech Solution
          </p>
          <p className="mt-2">© {currentYear} - Tous droits reserves</p>
        </div>
      </div>
    </footer>
  )
}