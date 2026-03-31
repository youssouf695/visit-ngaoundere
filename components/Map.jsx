'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FaList, FaTimes } from 'react-icons/fa'

const createCustomIcon = (color = '#f97316') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: linear-gradient(135deg, ${color}, ${color}dd);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
      box-shadow: 0 0 15px ${color};
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3" fill="white" stroke="none"/>
      </svg>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

function PopupOpener({ markerRef, selectedSiteId }) {
  const map = useMap()
  
  useEffect(() => {
    if (selectedSiteId !== null && markerRef.current && markerRef.current[selectedSiteId]) {
      const marker = markerRef.current[selectedSiteId]
      marker.openPopup()
      const position = marker.getLatLng()
      map.setView(position, 15)
    }
  }, [selectedSiteId, markerRef, map])
  
  return null
}

function RecenterMap({ center }) {
  const map = useMap()
  useEffect(() => {
    map.setView(center, 13)
  }, [center, map])
  return null
}

function getItinerary(lat, lng) {
  const conferenceLat = 7.3167
  const conferenceLng = 13.5833
  const url = `https://www.google.com/maps/dir/${conferenceLat},${conferenceLng}/${lat},${lng}`
  window.open(url, '_blank')
}

export default function Map({ sites }) {
  const center = [7.3167, 13.5833]
  const mapRef = useRef(null)
  const markerRef = useRef({})
  const [selectedSiteId, setSelectedSiteId] = useState(null)
  const [showList, setShowList] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setShowList(false)
        // Afficher le tooltip pendant 5 secondes au premier chargement
        setTimeout(() => {
          setShowTooltip(false)
        }, 5000)
      } else {
        setShowList(true)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const categoryColors = {
    culture: '#8b5cf6',
    nature: '#10b981',
    detente: '#f59e0b',
    cuisine: '#ef4444',
    aventure: '#3b82f6',
  }

  const categoryLabels = {
    culture: 'Culture',
    nature: 'Nature',
    detente: 'Detente',
    cuisine: 'Cuisine',
    aventure: 'Aventure',
  }

  const openSitePopup = (siteId) => {
    setSelectedSiteId(siteId)
    if (isMobile) {
      setShowList(false)
    }
    setTimeout(() => setSelectedSiteId(null), 500)
  }

  if (typeof window === 'undefined') {
    return (
      <div className="h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Chargement de la carte...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Bouton toggle pour mobile avec tooltip */}
      {isMobile && (
        <div className="fixed bottom-4 right-4 z-30">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-pulse shadow-lg">
              <span className="flex items-center gap-2">
                <FaList className="w-3 h-3" />
                Voir la liste des sites
              </span>
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gray-900 rotate-45" />
            </div>
          )}
          
          {/* Bouton */}
          <button
            onClick={() => {
              setShowList(!showList)
              setShowTooltip(false)
            }}
            className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all hover:scale-105"
          >
            {showList ? <FaTimes className="w-5 h-5" /> : <FaList className="w-5 h-5" />}
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        {/* Liste des sites */}
        <div className={`
          ${isMobile ? 'fixed inset-0 z-20 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out' : 'md:w-80 flex-shrink-0'}
          ${showList ? (isMobile ? 'translate-x-0' : 'block') : (isMobile ? 'translate-x-full' : 'hidden md:block')}
        `}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold flex items-center gap-2">
                  <FaList className="w-4 h-4" />
                  Sites touristiques
                </h3>
                <p className="text-white/80 text-sm mt-1">{sites.length} sites a decouvrir</p>
              </div>
              {isMobile && (
                <button
                  onClick={() => setShowList(false)}
                  className="text-white p-2 hover:bg-white/20 rounded-lg transition"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-gray-100">
                {sites.map((site) => (
                  <button
                    key={site.id}
                    onClick={() => openSitePopup(site.id)}
                    className="w-full text-left p-4 hover:bg-orange-50 transition-all group"
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <img
                          src={site.images?.[0] || site.imageUrl}
                          alt={site.name}
                          className="w-12 h-12 rounded-lg object-cover"
                          onError={(e) => {
                            e.target.src = 'https://placehold.co/100x100?text=Photo'
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: categoryColors[site.category] || '#f97316' }}
                          />
                          <span className="text-xs text-gray-500">
                            {categoryLabels[site.category]}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-orange-500 transition">
                          {site.name}
                        </h4>
                        <p className="text-xs text-gray-500 truncate">{site.shortDescription}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="flex-1">
          <MapContainer
            center={center}
            zoom={13}
            style={{ height: '500px', width: '100%' }}
            className="rounded-2xl shadow-lg z-0"
            ref={mapRef}
          >
            <RecenterMap center={center} />
            <PopupOpener 
              markerRef={markerRef} 
              selectedSiteId={selectedSiteId}
            />
            <TileLayer
              attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sites.map((site) => (
              <Marker
                key={site.id}
                position={[site.latitude, site.longitude]}
                icon={createCustomIcon(categoryColors[site.category] || '#f97316')}
                ref={(el) => {
                  if (el) {
                    markerRef.current[site.id] = el
                  }
                }}
              >
                <Popup>
                  <div className="max-w-xs p-1">
                    <img 
                      src={site.images?.[0] || site.imageUrl} 
                      alt={site.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/400x300?text=Photo'
                      }}
                    />
                    <h3 className="font-bold text-lg text-gray-900">{site.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{site.shortDescription}</p>
                    {site.localTip && (
                      <div className="mt-2 p-2 bg-orange-50 rounded-lg">
                        <p className="text-xs text-orange-600 italic">
                          Astuce : {site.localTip}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => getItinerary(site.latitude, site.longitude)}
                      className="mt-3 w-full bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all"
                    >
                      Itineraire depuis la conference
                    </button>
                    <a
                      href={`/sites/${site.slug}`}
                      className="mt-2 block text-center text-orange-500 text-sm hover:underline font-medium"
                    >
                      Voir les details →
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}