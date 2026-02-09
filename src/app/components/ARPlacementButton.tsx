import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Maximize2, Move3d, Info } from 'lucide-react'

interface ARPlacementButtonProps {
  productName?: string
}

export const ARPlacementButton = ({ productName = 'Sun Ninja Beach Tent' }: ARPlacementButtonProps) => {
  const [showInfo, setShowInfo] = useState(false)
  const [isARSupported, setIsARSupported] = useState(false)

  // Check for AR support (WebXR)
  const checkARSupport = async () => {
    if ('xr' in navigator) {
      try {
        interface NavigatorXR extends Navigator {
          xr?: { isSessionSupported: (mode: string) => Promise<boolean> }
        }
        const supported = await (navigator as NavigatorXR).xr?.isSessionSupported('immersive-ar')
        setIsARSupported(supported ?? false)
      } catch {
        setIsARSupported(false)
      }
    }
  }

  const launchAR = async () => {
    // Check AR support first
    await checkARSupport()

    if (!isARSupported) {
      // Fallback: Show info about AR requirements
      setShowInfo(true)
      return
    }

    // In production, this would:
    // 1. Load the 3D model (USDZ for iOS, GLB for Android)
    // 2. Initialize WebXR session
    // 3. Place the model in the real world
    // 4. Allow user to move/rotate/scale

    try {
      // WebXR implementation
      interface NavigatorXR extends Navigator {
        xr?: { 
          requestSession: (mode: string, options: Record<string, string[]>) => Promise<unknown>
        }
      }
      await (navigator as NavigatorXR).xr?.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay']
      })

      // Handle AR session...
      alert('AR feature will launch here! (WebXR integration required)')
    } catch (error) {
      console.error('AR launch failed:', error)
      
      // iOS USDZ fallback
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        const anchor = document.createElement('a')
        anchor.rel = 'ar'
        anchor.href = '/models/sun-ninja-tent.usdz' // Path to 3D model
        anchor.download = 'sun-ninja-tent.usdz'
        anchor.click()
      } else {
        setShowInfo(true)
      }
    }
  }

  return (
    <>
      <motion.button
        onClick={launchAR}
        className="relative group quantum-button px-8 py-4 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <div className="relative flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Camera className="w-6 h-6" />
          </motion.div>
          <span className="font-bold text-lg">View in Your Space</span>
          <Move3d className="w-5 h-5 opacity-60" />
        </div>

        {/* Sparkle effect */}
        <motion.div
          className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full"
          animate={{
            x: ['0%', '100%'],
            y: ['0%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </motion.button>

      {/* Info Modal */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowInfo(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="quantum-glass-dark p-8 rounded-3xl max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <Info className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                AR Placement
              </h3>
              <p className="text-white/60">
                See how {productName} looks in your space using augmented reality
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="quantum-glass p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-2">📱 For Mobile Users</h4>
                <p className="text-white/60 text-sm">
                  Use your phone's camera to place and view the tent in real-world size
                </p>
              </div>

              <div className="quantum-glass p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-2">💻 For Desktop Users</h4>
                <p className="text-white/60 text-sm">
                  Scan the QR code below with your mobile device to launch AR
                </p>
              </div>

              <div className="quantum-glass p-4 rounded-xl text-center">
                <div className="text-6xl mb-2">📷</div>
                <p className="text-white/40 text-xs">QR Code will appear here</p>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 mb-6">
              <p className="text-cyan-400 text-sm">
                <strong>Requirements:</strong> iOS 12+ or Android 8+, AR-capable device
              </p>
            </div>

            <motion.button
              onClick={() => setShowInfo(false)}
              className="w-full quantum-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Got it!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

// Alternative: Simple AR Quick Link (for iOS USDZ)
export const ARQuickLink = ({ modelPath }: { modelPath: string }) => {
  return (
    <a
      href={modelPath}
      rel="ar"
      className="inline-flex items-center gap-2 quantum-button px-6 py-3"
    >
      <Maximize2 className="w-5 h-5" />
      <span>View in AR</span>
      <span className="text-xs opacity-60">(iOS)</span>
    </a>
  )
}
