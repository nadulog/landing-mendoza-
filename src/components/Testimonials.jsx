import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/site'
import { SectionHeading, ease } from './Reveal'

const tones = ['from-lake-400 to-lake-600', 'from-olive-400 to-olive-600', 'from-sand-400 to-sand-500']

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sand-100 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Testimonios"
          title={
            <>
              Lo que se llevan <em className="text-olive-500">nuestros viajeros</em>
            </>
          }
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20 lg:gap-6">
          {TESTIMONIALS.map((t, i) => {
            const dark = i === 1
            return (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.12, ease }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-[28px] p-8 shadow-[0_20px_50px_-30px_rgba(7,28,41,0.35)] ring-1 ring-abyss-900/5 sm:p-9 ${
                i === 1 ? 'bg-abyss-900' : 'bg-white'
              }`}
            >
              <Quote className={`absolute right-7 top-7 h-10 w-10 ${dark ? 'text-lake-400/40' : 'text-sand-300'}`} strokeWidth={1.25} />
              <div className="flex gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-sand-500 text-sand-500" />
                ))}
              </div>
              <blockquote className={`mt-6 flex-1 font-display text-xl font-light leading-snug ${dark ? 'text-white' : 'text-abyss-900'}`}>
                “{t.text}”
              </blockquote>
              <figcaption className={`mt-8 flex items-center gap-4 border-t pt-6 ${dark ? 'border-white/10' : 'border-abyss-900/10'}`}>
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br ${tones[i % 3]} font-display text-lg text-white`}
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className={`block font-bold ${dark ? 'text-white' : 'text-abyss-900'}`}>{t.name}</span>
                  <span className={`block text-sm ${dark ? 'text-white/60' : 'text-abyss-700/60'}`}>
                    {t.from} · {t.activity}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
            )
          })}
        </div>

        <p className="mt-10 text-center text-xs text-abyss-700/50">* Testimonios demostrativos a modo de ejemplo.</p>
      </div>
    </section>
  )
}
