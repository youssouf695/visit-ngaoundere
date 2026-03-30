'use client'

import { motion } from 'framer-motion'
import { FaMapMarkedAlt, FaFilter } from 'react-icons/fa'
import sitesData from '@/data/sites.json'
import SiteCard from '@/components/SiteCard'
import { useState } from 'react'

const categories = ['Tous', 'culture', 'nature', 'detente', 'cuisine', 'aventure']
const categoryLabels = {
  culture: 'Culture',
  nature: 'Nature',
  detente: 'Détente',
  cuisine: 'Cuisine',
  aventure: 'Aventure',
}

export default function SitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const sites = sitesData.sites

  const filteredSites = selectedCategory === 'Tous' 
    ? sites 
    : sites.filter(site => site.category === selectedCategory)

  return (
    <div className="px-10  min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 mb-4">
            <FaMapMarkedAlt className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tous les <span className="gradient-text">sites</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les 6 lieux incontournables à visiter pendant votre séjour à Ngaoundéré
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-500 mr-2">
            <FaFilter className="w-4 h-4" />
            <span className="text-sm">Filtrer :</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white  text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'Tous' ? 'Tous' : categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Grille des sites */}
        {filteredSites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500">Aucun site dans cette catégorie</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSites.map((site, index) => (
              <SiteCard key={site.id} site={site} index={index} />
            ))}
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-6 glass-card text-center"
        >
          <p className="text-gray-600">
            <span className="font-bold text-orange-500">{filteredSites.length}</span> site(s) affiché(s) sur {sites.length} au total
          </p>
        </motion.div>
      </div>
    </div>
  )
}