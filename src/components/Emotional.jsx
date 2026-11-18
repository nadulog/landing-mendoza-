import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IMAGES } from '../data/site'
import { ease } from './Reveal'

export default function Emotional() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])

  return (
    <section ref={ref} className="relative flex min-h-[90vh] items-center overflow-hidden bg-abyss-950 py-32">
      <motion.img
        src={IMAGES.emotional}
        alt="Cordillera de los Andes al atardecer"
        loading="lazy"
        style={{ y, scale }}
        className="absolute inset-0 h-[130%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-abyss-950/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,21,32,0.75)_80%)]" />

      <div className="container-x relative text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="eyebrow text-sand-300"
        >
          Potrerillos, Mendoza
        </motion.span>

        <h2 className="mx-auto mt-8 max-w-5xl font-display text-[clamp(2.6rem,7vw,6.5rem)] font-light leading-[1] tracking-tight text-white">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease }}
          >
            No es solo una excursión.
          </motion.span>
          <motion.span
            className="mt-2 block italic text-sand-300"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.35, ease }}
          >
            Es una experiencia.
          </motion.span>
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.7, ease }}
          className="mx-auto mt-12 h-px w-40 origin-center bg-gradient-to-r from-transparent via-lake-300 to-transparent"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg"
        >
          El silencio de la montaña, el agua turquesa del dique, el viento en la cara. Momentos que no se cuentan: se viven.
        </motion.p>
      </div>
    </section>
  )
}
