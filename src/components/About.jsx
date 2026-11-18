import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { IMAGES } from '../data/site'
import Reveal, { SectionHeading, ease } from './Reveal'

const points = ['Grupos reducidos y salidas privadas', 'Traslados y recorridos a medida', 'Experiencias para familias, parejas y amigos']

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-sand-100 py-24 sm:py-32">
      {/* Línea de montaña decorativa */}
      <svg className="pointer-events-none absolute -right-20 top-10 w-[600px] text-sand-300/70" viewBox="0 0 600 200" fill="none" aria-hidden="true">
        <path d="M0 180 120 60l70 80 90-120 110 130 60-50 150 80" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Collage de imágenes */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-soft sm:mr-16"
          >
            <img src={IMAGES.about} alt="Grupo disfrutando de un mirador sobre el lago" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
            className="absolute -bottom-10 right-0 hidden w-56 overflow-hidden rounded-3xl border-[6px] border-sand-100 shadow-soft sm:block lg:w-64"
          >
            <img src={IMAGES.aboutSmall} alt="Trekking por senderos de montaña" loading="lazy" className="aspect-square w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="absolute -left-2 top-8 rounded-2xl bg-abyss-900 px-5 py-4 text-white shadow-soft sm:-left-6"
          >
            <p className="font-display text-3xl">Locales</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-lake-300">de corazón</p>
          </motion.div>
        </div>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title={
              <>
                Somos de acá. <em className="text-olive-500">Y amamos</em> mostrarlo.
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-abyss-700/80 sm:text-lg">
              <strong className="font-semibold text-abyss-900">Experiencia Potrerillos</strong> nace del amor por este rincón
              de Mendoza. Crecimos entre estos cerros, conocemos sus senderos, sus colores y sus historias, y queremos que vos
              también te lleves un pedacito de ellos.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-4 text-base leading-relaxed text-abyss-700/80 sm:text-lg">
              Trabajamos con grupos reducidos, atención cercana y la seriedad que una salida en montaña requiere. Cada
              excursión está pensada para que solo te ocupes de disfrutar.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.35 + i * 0.08} as="li" y={20} className="flex items-center gap-3 text-abyss-800">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lake-500/15 text-lake-600">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="font-medium">{p}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.6}>
            <p className="mt-10 font-display text-2xl italic text-abyss-700/60">— El equipo de Experiencia Potrerillos</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
