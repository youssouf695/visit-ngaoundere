'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaCompass, FaCoffee, FaUsers, FaArrowRight, FaStar } from 'react-icons/fa'
import sitesData from '@/data/sites.json'
import VisitCounter from '@/components/VisitCounter'

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    </div>
  )
})

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  const sites = sitesData.sites

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        
        <div className="relative container-custom text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="glass-card px-6 py-3">
              <VisitCounter />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Découvrez{' '}
            <span className="gradient-text bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600">
              Ngaoundéré
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Guide interactif premium pour les participants d&apos;IndabaX Cameroun 2026
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <FaMapMarkerAlt className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">{sites.length} sites exclusifs</span>
            </div>
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <FaCompass className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Itinéraire intelligent</span>
            </div>
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <FaStar className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">Guide premium</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="#map"
              className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-semibold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorer la carte
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/sites"
              className="px-8 py-3 glass-card text-gray-700 font-semibold hover:bg-white/20 transition-all"
            >
              Voir les sites
            </Link>
          </motion.div>
        </div>
        
      </section>

      {/* Carte Interactive */}
      <section id="map" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Carte <span className="gradient-text">Interactive</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cliquez sur les marqueurs pour découvrir chaque site et obtenir l&apos;itinéraire
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden glow-effect"
          >
            <Map sites={sites} />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Une expérience <span className="gradient-text">premium</span>
            </h2>
            <p className="text-gray-600">Tout ce dont vous avez besoin pour explorer Ngaoundéré</p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: FaCompass, title: 'Exploration guidée', desc: 'Descriptions détaillées et conseils locaux authentiques', color: 'from-orange-500 to-orange-600' },
              { icon: FaCoffee, title: 'Spots à proximité', desc: 'Restaurants et lieux pour goûter le meilleur kilishi', color: 'from-purple-500 to-purple-600' },
              { icon: FaUsers, title: 'Pour IndabaX', desc: 'Développé spécialement pour les participants', color: 'from-pink-500 to-pink-600' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 p-12 text-center"
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-0 -right-32 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float animation-delay-2000" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à explorer Ngaoundéré ?
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Entre deux sessions de Machine Learning, prenez le temps de découvrir la ville
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/sites"
                  className="px-8 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                  Découvrir les sites
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 glass-card text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}