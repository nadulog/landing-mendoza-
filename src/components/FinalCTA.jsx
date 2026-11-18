import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Clock, MessageCircle } from 'lucide-react'
import { BRAND, IMAGES, waLink } from '../data/site'
import WhatsAppIcon from './WhatsAppIcon'
import Reveal from './Reveal'

export default function FinalCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section id="contacto" ref={ref} className="relative bg-sand-100 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[32px] bg-abyss-950 sm:rounded-[44px]">
        <motion.img
          src={IMAGES.cta}
          alt="Cielo estrellado sobre la cordillera"
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 h-[120%] w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/50 to-abyss-950/30" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center sm:py-40">
          <Reveal>
            <span className="eyebrow text-lake-300">Reservá tu experiencia</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[1] tracking-tight text-white">
              ¿Listo para vivir <em className="text-sand-300">Potrerillos</em>?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Escribinos y te ayudamos a armar la salida perfecta. Te respondemos rápido, sin compromiso.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-5 text-lg font-bold text-white shadow-[0_20px_60px_-15px_rgba(37,211,102,0.8)] sm:px-12 sm:py-6 sm:text-xl"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
              <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />
              <span className="relative">Reservar por WhatsApp</span>
            </motion.a>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-lake-300" /> {BRAND.whatsappDisplay}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-lake-300" /> {BRAND.hours}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
