// ─────────────────────────────────────────────────────────────
//  Configuración central de la landing.
//  Cambiá acá el número de WhatsApp, datos de contacto y fotos.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'Experiencia Potrerillos',
  tagline: 'Excursiones & aventura en Mendoza',
  // Formato internacional sin "+" ni espacios (ej: 549261XXXXXXX)
  whatsapp: '5492610000000',
  whatsappDisplay: '+54 9 261 000-0000',
  email: 'hola@experienciapotrerillos.com.ar',
  location: 'Potrerillos, Luján de Cuyo, Mendoza',
  hours: 'Todos los días · 8 a 20 h',
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
  },
}

export const waLink = (message = '¡Hola! Quiero consultar por las excursiones en Potrerillos 🏔️') =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`

// Fotos ilustrativas (Unsplash). Reemplazar por fotos reales del cliente.
const u = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  hero: u('1501785888041-af3ef285b470', 2400),
  emotional: u('1549880338-65ddcdfd017b', 2400),
  about: u('1533587851505-d119e13fa0d7', 1400),
  aboutSmall: u('1551632811-561732d1e306', 800),
  cta: u('1519681393784-d120267933ba', 2400),
}

export const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Excursiones', href: '#excursiones' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export const EXCURSIONS = [
  {
    title: 'Cabalgatas',
    tag: 'Clásico mendocino',
    description: 'Recorré senderos de montaña a caballo, con baqueanos locales y vistas abiertas al dique y la cordillera.',
    duration: '2 a 3 horas',
    level: 'Todo público',
    image: u('1553284965-83fd3e82fa5a', 1000),
  },
  {
    title: 'Trekking',
    tag: 'Aventura',
    description: 'Caminatas guiadas por quebradas y miradores secretos. Ritmo a medida, paradas para fotos y mucha naturaleza.',
    duration: '3 a 5 horas',
    level: 'Moderado',
    image: u('1551632811-561732d1e306', 1000),
  },
  {
    title: 'Rafting',
    tag: 'Adrenalina',
    description: 'Navegá el río Mendoza entre rápidos y cañones, con equipo completo y guías certificados.',
    duration: '1 a 2 horas',
    level: 'Desde 12 años',
    image: u('1530866495561-507c9faab2ed', 1000),
  },
  {
    title: 'Paseos guiados',
    tag: 'Relax',
    description: 'Un recorrido tranquilo por los rincones más lindos de Potrerillos, con historia, paisaje y anécdotas locales.',
    duration: '2 horas',
    level: 'Todo público',
    image: u('1476514525535-07fb3b4ae5f1', 1000),
  },
  {
    title: 'Día de montaña',
    tag: 'Full day',
    description: 'Una jornada completa en altura: caminata, almuerzo de campo y paisajes que te quedan para siempre.',
    duration: 'Día completo',
    level: 'Moderado',
    image: u('1486870591958-9b9d0d1dda99', 1000),
  },
  {
    title: 'Atardeceres en Potrerillos',
    tag: 'Imperdible',
    description: 'El cielo se enciende sobre la cordillera. Mirador, mate o un brindis y el silencio de la montaña.',
    duration: '2 horas',
    level: 'Todo público',
    image: u('1506905925346-21bda4d32df4', 1000),
  },
]

export const BENEFITS = [
  { icon: 'HeartHandshake', title: 'Atención personalizada', text: 'Te asesoramos para elegir la experiencia ideal según tu grupo y tus tiempos.' },
  { icon: 'Compass', title: 'Guías locales', text: 'Nacimos y vivimos acá. Conocemos cada sendero, cada historia y cada mirador.' },
  { icon: 'ShieldCheck', title: 'Actividades seguras', text: 'Equipamiento revisado, guías capacitados y protocolos en cada salida.' },
  { icon: 'Mountain', title: 'Paisajes únicos', text: 'Dique turquesa, cordillera nevada y cielos que solo existen en Mendoza.' },
  { icon: 'Sparkles', title: 'Experiencias memorables', text: 'Cuidamos los detalles para que te lleves mucho más que una foto.' },
  { icon: 'MessageCircle', title: 'Reserva simple por WhatsApp', text: 'Escribinos, consultá disponibilidad y reservá en minutos. Sin vueltas.' },
]

export const GALLERY = [
  { src: u('1464822759023-fed622ff2c3b', 1200), alt: 'Valle de montaña con bosque y cumbres nevadas', span: 'md:col-span-2 md:row-span-2' },
  { src: u('1500530855697-b586d89ba3ee', 900), alt: 'Ruta entre cerros rojizos' },
  { src: u('1530866495561-507c9faab2ed', 900), alt: 'Grupo haciendo rafting en rápidos' },
  { src: u('1508672019048-805c876b67e2', 900), alt: 'Persona contemplando un lago entre montañas', span: 'md:row-span-2' },
  { src: u('1517824806704-9040b037703b', 900), alt: 'Carpa bajo la Vía Láctea' },
  { src: u('1589182373726-e4f658ab50f0', 900), alt: 'Cumbres nevadas bajo el cielo azul' },
  { src: u('1470071459604-3b5ec3a7fe05', 1200), alt: 'Laderas verdes con nubes al atardecer' },
  { src: u('1494500764479-0c8f2919a3d8', 900), alt: 'Lago al anochecer con tonos violetas', span: 'col-span-2 md:col-span-1' },
]

export const TESTIMONIALS = [
  {
    name: 'Lucía M.',
    from: 'Buenos Aires',
    activity: 'Cabalgata al atardecer',
    text: 'Fue lo mejor del viaje. El guía nos hizo sentir como en casa y el atardecer sobre el dique fue increíble. Ya estamos pensando en volver.',
  },
  {
    name: 'Diego y Carla',
    from: 'Córdoba',
    activity: 'Rafting + Día de montaña',
    text: 'Organización impecable de principio a fin. Reservamos por WhatsApp en cinco minutos y todo salió perfecto. Super recomendables.',
  },
  {
    name: 'Martín R.',
    from: 'Santiago de Chile',
    activity: 'Trekking',
    text: 'Paisajes de película y un equipo que transmite pasión por lo que hace. Se nota que aman Potrerillos.',
  },
]
