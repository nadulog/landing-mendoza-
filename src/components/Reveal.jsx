import { motion } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

export default function Reveal({ children, delay = 0, y = 40, className = '', as = 'div' }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Comp>
  )
}

export function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <span className={`eyebrow ${light ? 'text-lake-300' : 'text-lake-600'}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
            light ? 'text-white' : 'text-abyss-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-abyss-700/75'}`}>{text}</p>
        </Reveal>
      )}
    </div>
  )
}
