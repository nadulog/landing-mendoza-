import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { BRAND, GALLERY } from '../data/site'
import { SectionHeading, ease } from './Reveal'

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const close = () => setIndex(null)
  const go = useCallback((dir) => setIndex((i) => (i + dir + GALLERY.length) % GALLERY.length), [])

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, go])

  return (
    <section id="galeria" className="bg-sand-50 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Galería"
            title={
              <>
                Postales que <em className="text-lake-600">te esperan</em>
              </>
            }
          />
          <a
            href={BRAND.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-abyss-800 underline decoration-lake-500 decoration-2 underline-offset-4"
          >
            Seguinos en Instagram →
          </a>
        </div>

        <div className="mt-14 grid grid-flow-dense auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4 lg:mt-20">
          {GALLERY.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease }}
              className={`group relative overflow-hidden rounded-2xl bg-sand-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-lake-400 md:rounded-3xl ${img.span ?? ''} ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              aria-label={`Ampliar foto: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-abyss-950/0 transition-colors duration-500 group-hover:bg-abyss-950/30" />
              <span className="absolute bottom-3 right-3 grid h-10 w-10 scale-75 place-items-center rounded-full bg-white/90 text-abyss-900 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-abyss-950/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Galería ampliada"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={GALLERY[index].src.replace(/w=\d+/, 'w=2000')}
                alt={GALLERY[index].alt}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease }}
                className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
              {index + 1} / {GALLERY.length}
            </p>

            <button onClick={close} className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Cerrar">
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => (e.stopPropagation(), go(-1))}
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => (e.stopPropagation(), go(1))}
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
