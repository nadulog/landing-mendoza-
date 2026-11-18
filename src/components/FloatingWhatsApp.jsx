import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { waLink } from '../data/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [bubble, setBubble] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Burbuja de saludo que aparece una sola vez
  useEffect(() => {
    if (!visible || dismissed) return
    const t = setTimeout(() => setBubble(true), 1800)
    return () => clearTimeout(t)
  }, [visible, dismissed])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-[60] flex items-end gap-3 sm:bottom-8 sm:right-8"
        >
          <AnimatePresence>
            {bubble && !dismissed && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="relative mb-2 hidden max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm text-abyss-800 shadow-soft sm:block"
              >
                <button
                  onClick={() => setDismissed(true)}
                  className="absolute -left-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-abyss-900 text-white"
                  aria-label="Cerrar mensaje"
                >
                  <X className="h-3 w-3" />
                </button>
                <strong className="block font-bold">¡Hola! 👋</strong>
                ¿Te ayudamos a elegir tu excursión?
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribinos por WhatsApp"
            className="group relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.9)] transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            <WhatsAppIcon className="relative h-8 w-8" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
