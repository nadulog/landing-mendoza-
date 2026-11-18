import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Users } from 'lucide-react'
import { EXCURSIONS, waLink } from '../data/site'
import { SectionHeading, ease } from './Reveal'
import WhatsAppIcon from './WhatsAppIcon'

function ExcursionCard({ item, index }) {
  const message = `¡Hola! Quiero consultar por la excursión "${item.title}" en Potrerillos. ¿Qué disponibilidad tienen?`

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease }}
      whileHover={{ y: -8 }}
      className="group relative flex h-[480px] flex-col overflow-hidden rounded-[28px] bg-abyss-900 shadow-soft sm:h-[520px]"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

      {/* Top */}
      <div className="relative flex items-start justify-between p-5">
        <span className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {item.tag}
        </span>
        <span className="font-display text-sm italic text-white/70">0{index + 1}</span>
      </div>

      {/* Bottom content */}
      <div className="relative mt-auto p-6">
        <h3 className="font-display text-3xl font-normal leading-tight text-white">{item.title}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lake-500/20 px-3 py-1 text-xs font-semibold text-lake-300 ring-1 ring-lake-400/30">
            <Clock className="h-3.5 w-3.5" /> {item.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sand-300/15 px-3 py-1 text-xs font-semibold text-sand-200 ring-1 ring-sand-300/25">
            <Users className="h-3.5 w-3.5" /> {item.level}
          </span>
        </div>

        {/* La descripción se expande en hover (desktop) y siempre visible en mobile */}
        <div className="grid transition-all duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-within:grid-rows-[1fr] md:group-focus-within:opacity-100">
          <p className="overflow-hidden pt-4 text-sm leading-relaxed text-white/75">{item.description}</p>
        </div>

        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-between rounded-full bg-white/10 py-2 pl-5 pr-2 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-abyss-900"
        >
          Consultar
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon className="h-4 w-4" />
          </span>
        </a>
      </div>
    </motion.article>
  )
}

export default function Excursions() {
  return (
    <section id="excursiones" className="relative bg-sand-50 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Excursiones destacadas"
            title={
              <>
                Elegí tu forma de <em className="text-lake-600">descubrir</em> la montaña
              </>
            }
            text="Desde la calma de un paseo al atardecer hasta la adrenalina del río. Todas nuestras salidas son guiadas por gente del lugar."
          />
          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-abyss-800"
          >
            <span className="border-b-2 border-lake-500 pb-0.5">¿Armamos algo a medida?</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {EXCURSIONS.map((item, i) => (
            <ExcursionCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-abyss-700/50">
          Duraciones ilustrativas. Consultá horarios, temporada y disponibilidad por WhatsApp.
        </p>
      </div>
    </section>
  )
}
