'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaArrowRight, FaStar } from 'react-icons/fa'

export default function SiteCard({ site, index }) {
  const categoryColors = {
    culture: 'from-purple-500 to-purple-600',
    nature: 'from-green-500 to-green-600',
    detente: 'from-orange-500 to-orange-600',
    cuisine: 'from-red-500 to-red-600',
    aventure: 'from-blue-500 to-blue-600',
  }

  const categoryLabels = {
    culture: 'Culture',
    nature: 'Nature',
    detente: 'Détente',
    cuisine: 'Cuisine',
    aventure: 'Aventure',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="glass-card overflow-hidden glow-effect h-full flex flex-col">
        <div className="relative overflow-hidden h-52">
          <img 
            src={site.imageUrl} 
            alt={site.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://placehold.co/400x300?text=Photo'
            }}
          />
          <div className={`absolute top-3 left-3 bg-gradient-to-r ${categoryColors[site.category]} px-3 py-1 rounded-full text-xs text-white font-medium shadow-lg`}>
            {categoryLabels[site.category]}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
            {site.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {site.shortDescription}
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaClock className="w-3 h-3 text-orange-500" />
              <span>{site.openingHours}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaMoneyBillWave className="w-3 h-3 text-green-500" />
              <span>{site.entryFee}</span>
            </div>
          </div>
          
          <Link 
            href={`/sites/${site.slug}`}
            className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all group-hover:shadow-lg"
          >
            Découvrir
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}