export default function Logo({ dark = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-lake-400 to-abyss-600 shadow-glow">
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
          <path d="M3 30 15 13l6 8 4-5 12 14Z" fill="#FBF8F2" />
          <path d="M15 13l3 4-3 1-2-2Z" fill="#E8D9BF" />
          <path
            d="M3 33c4-1.6 8-1.6 12 0s8 1.6 12 0 6-1.2 10 0"
            stroke="#7FDCD4"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block text-[10px] font-bold uppercase tracking-widest2 ${dark ? 'text-lake-600' : 'text-lake-300'}`}>
          Experiencia
        </span>
        <span className={`block font-display text-xl font-medium ${dark ? 'text-abyss-900' : 'text-white'}`}>Potrerillos</span>
      </span>
    </span>
  )
}
