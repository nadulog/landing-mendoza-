import { motion } from 'framer-motion'
import { Compass, HeartHandshake, MessageCircle, Mountain, ShieldCheck, Sparkles } from 'lucide-react'
import { BENEFITS } from '../data/site'
import { SectionHeading, ease } from './Reveal'

const ICONS = { Compass, HeartHandshake, MessageCircle, Mountain, ShieldCheck, Sparkles }

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-abyss-900 py-24 sm:py-32">
      {/* Halos de color */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-lake-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-olive-500/25 blur-[120px]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      <div className="container-x relative">
        <SectionHeading
          light
          center
          eyebrow="Por qué elegirnos"
          title={
            <>
              Tu aventura, en <em className="text-lake-300">buenas manos</em>
            </>
          }
          text="Nos ocupamos de cada detalle para que vivas la montaña con tranquilidad, seguridad y mucha emoción."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon]
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease }}
                className="group relative bg-abyss-900 p-8 transition-colors duration-500 hover:bg-abyss-800 sm:p-10"
              >
                <div className="relative mb-7 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-lake-400/25 to-lake-600/10 text-lake-300 ring-1 ring-lake-400/30 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-lake-500 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-2xl font-normal text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{b.text}</p>
                <span className="absolute right-8 top-8 font-display text-sm italic text-white/20">0{i + 1}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
