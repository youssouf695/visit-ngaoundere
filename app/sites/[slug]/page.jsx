'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaArrowLeft, FaClock, FaMapMarkerAlt, FaCoffee, 
  FaUtensils, FaMountain, FaSun, FaMoneyBillWave, 
  FaInfoCircle, FaShare, FaLightbulb, FaCompass
} from 'react-icons/fa'
import sitesData from '@/data/sites.json'
import { useState, use } from 'react'
import ImageGallery from '@/components/ImageGallery'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function SiteDetailPage({ params }) {
  const { slug } = use(params)
  const site = sitesData.sites.find((s) => s.slug === slug)
  const [showShare, setShowShare] = useState(false)

  if (!site) notFound()

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: site.name,
        text: site.shortDescription,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      setShowShare(true)
      setTimeout(() => setShowShare(false), 2000)
    }
  }

  const getItinerary = () => {
    const conferenceLat = 7.3167
    const conferenceLng = 13.5833
    const url = `https://www.google.com/maps/dir/${conferenceLat},${conferenceLng}/${site.latitude},${site.longitude}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom max-w-6xl mx-auto">
        
        {/* Bouton retour */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link 
            href="/sites"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour a la liste
          </Link>
        </motion.div>

        {/* Grille principale: 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLONNE GAUCHE: Galerie + Description */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Galerie d'images */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <ImageGallery images={site.images || [site.imageUrl]} title={site.name} />
            </motion.div>

            {/* Description complete */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FaInfoCircle className="w-5 h-5 text-orange-500" />
                Pourquoi vous allez adorer
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p className="text-lg font-medium text-gray-800 italic">
                  "{site.shortDescription}"
                </p>
                <p>
                  {site.longDescription || site.description}
                </p>
              </div>
              {site.imageCredit && (
                <div className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
                  Credits photos : {site.imageCredit}
                </div>
              )}
            </div>
          </div>

          {/* COLONNE DROITE: Infos + CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* En-tete du site */}
            <div>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium mb-3">
                {site.category === 'culture' && 'Culture'}
                {site.category === 'nature' && 'Nature'}
                {site.category === 'detente' && 'Detente'}
                {site.category === 'cuisine' && 'Cuisine'}
                {site.category === 'aventure' && 'Aventure'}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {site.name}
              </h1>
            </div>

            {/* Bouton partage */}
            <button
              onClick={handleShare}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-all"
            >
              <FaShare className="w-4 h-4" />
              Partager ce site
            </button>

            {/* Informations pratiques - grille 2 colonnes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-gray-500 text-xs uppercase mb-1">Horaires</div>
                <div className="text-gray-800 flex items-center gap-2 font-medium">
                  <FaClock className="w-4 h-4 text-orange-500" />
                  {site.openingHours}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-gray-500 text-xs uppercase mb-1">Tarif</div>
                <div className="text-gray-800 flex items-center gap-2 font-medium">
                  <FaMoneyBillWave className="w-4 h-4 text-green-500" />
                  {site.entryFee}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-gray-500 text-xs uppercase mb-1">Meilleur moment</div>
                <div className="text-gray-800 flex items-center gap-2 font-medium">
                  <FaSun className="w-4 h-4 text-yellow-500" />
                  {site.bestTime}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-gray-500 text-xs uppercase mb-1">Categorie</div>
                <div className="text-gray-800 flex items-center gap-2 font-medium">
                  <FaMapMarkerAlt className="w-4 h-4 text-orange-500" />
                  {site.category === 'culture' && 'Culture'}
                  {site.category === 'nature' && 'Nature'}
                  {site.category === 'detente' && 'Detente'}
                  {site.category === 'cuisine' && 'Cuisine'}
                  {site.category === 'aventure' && 'Aventure'}
                </div>
              </div>
            </div>

            {/* Astuce locale */}
            {site.localTip && (
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-xl p-5">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <FaLightbulb className="w-4 h-4" />
                  Astuce locale
                </h3>
                <p className="text-orange-700 text-sm leading-relaxed">{site.localTip}</p>
              </div>
            )}

            {/* Bouton itineraire */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={getItinerary}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3"
            >
              <FaCompass className="w-5 h-5" />
              Itineraire depuis la conference
            </motion.button>
          </div>
        </div>

        {/* Spots à proximité - Pleine largeur */}
        {site.nearbySpots && site.nearbySpots.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaCoffee className="w-5 h-5 text-orange-500" />
              A proximite
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {site.nearbySpots.map((spot, idx) => (
                <div key={idx} className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition">
                      {spot.name}
                    </h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {spot.type === 'restaurant' && 'Restaurant'}
                      {spot.type === 'cafe' && 'Cafe'}
                      {spot.type === 'shopping' && 'Shopping'}
                      {spot.type === 'service' && 'Service'}
                      {spot.type === 'street-food' && 'Street food'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{spot.description}</p>
                  {spot.distance && (
                    <div className="text-xs text-orange-500 flex items-center gap-1 font-medium">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      Distance: {spot.distance}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {showShare && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-2xl z-50"
          >
            Lien copie dans le presse-papier
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}