import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { BRAND, EXCURSIONS, NAV, waLink } from '../data/site'
import Logo from './Logo'

const socials = [
  { icon: Instagram, href: BRAND.socials.instagram, label: 'Instagram' },
  { icon: Facebook, href: BRAND.socials.facebook, label: 'Facebook' },
  { icon: Youtube, href: BRAND.socials.youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-sand-100 pb-28 pt-20 text-abyss-800 sm:pb-12">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-abyss-700/70">
              Excursiones, aventura y naturaleza en Potrerillos, Mendoza. Experiencias guiadas por gente del lugar.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-abyss-900/15 text-abyss-800 transition-all duration-300 hover:-translate-y-1 hover:border-lake-500 hover:bg-lake-500 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest2 text-lake-600">Navegación</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-abyss-700/80 transition-colors hover:text-lake-600">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest2 text-lake-600">Excursiones</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {EXCURSIONS.map((e) => (
                <li key={e.title}>
                  <a href="#excursiones" className="text-abyss-700/80 transition-colors hover:text-lake-600">
                    {e.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest2 text-lake-600">Contacto</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-abyss-700/80 hover:text-lake-600">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lake-600" /> {BRAND.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-start gap-3 break-all text-abyss-700/80 hover:text-lake-600">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lake-600" /> {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-abyss-700/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lake-600" /> {BRAND.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-abyss-900/10 pt-8 text-xs text-abyss-700/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
          </p>
          <a href="#inicio" className="inline-flex items-center gap-2 font-semibold hover:text-lake-600">
            Volver arriba <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Marca gigante decorativa */}
      <p
        aria-hidden="true"
        className="pointer-events-none mt-12 select-none overflow-hidden whitespace-nowrap text-center font-display text-[16vw] font-light leading-none text-abyss-900/[0.06]"
      >
        Potrerillos
      </p>
    </footer>
  )
}
