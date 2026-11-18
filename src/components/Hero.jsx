import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, MapPin, Star } from 'lucide-react'
import { IMAGES, waLink } from '../data/site'
import WhatsAppIcon from './WhatsAppIcon'
import { ease } from './Reveal'

const titleWords = [
  { w: 'Viví' },
  { w: 'Potrerillos' },
  { w: 'como', br: true },
  { w: 'nunca', italic: true },
  { w: 'antes', italic: true },
]

const stats = [
  { value: '6', label: 'experiencias únicas' },
  { value: '~60 km', label: 'desde Mendoza ciudad' },
  { value: '100%', label: 'guías locales' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-abyss-950">
      {/* Imagen con parallax + zoom lento */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <motion.img
          src={IMAGES.hero}
          alt="Dique turquesa rodeado de montañas en Potrerillos"
          className="h-full w-full object-cover"
          initial={{ scale: 1.25 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2.8, ease }}
          fetchpriority="high"
        />
      </motion.div>

      {/* Capas de color para legibilidad y atmósfera */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss-950/70 via-abyss-950/20 to-abyss-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-abyss-950/60 via-transparent to-transparent" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" />

      <motion.div style={{ y: contentY, opacity: fade }} className="container-x relative z-10 pb-10 pt-32 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-md"
        >
          <MapPin className="h-3.5 w-3.5 text-lake-300" />
          Potrerillos · Mendoza · Argentina
        </motion.div>

        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.9rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight text-white">
          {titleWords.map(({ w, italic, br }, i) => (
            <span key={w}>
              {br && <br className="sm:hidden" />}
              <span className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`inline-block ${italic ? 'italic text-sand-300' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.6 + i * 0.09, ease }}
                >
                  {w}
                </motion.span>
              </span>{' '}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Excursiones, aventura y naturaleza en uno de los destinos más increíbles de Mendoza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#excursiones" className="btn group bg-white text-abyss-900 hover:bg-sand-200">
            Ver excursiones
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Consultar por WhatsApp
          </a>
        </motion.div>

        {/* Franja de datos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-14 flex items-end justify-between gap-6 border-t border-white/15 pt-6"
        >
          <dl className="grid grid-cols-3 gap-6 sm:gap-14">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="flex items-center gap-1.5 font-display text-2xl text-white sm:text-4xl">
                  {s.value}
                  {s.star && <Star className="h-4 w-4 fill-sand-300 text-sand-300 sm:h-5 sm:w-5" />}
                </dd>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/55 sm:text-xs">{s.label}</p>
              </div>
            ))}
          </dl>

          <a
            href="#excursiones"
            aria-label="Bajar a excursiones"
            className="hidden h-14 w-14 shrink-0 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-abyss-900 md:grid"
          >
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
              <ArrowDown className="h-5 w-5" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
