export default function Paused() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: '#0B2A3C',
        color: '#F5EFE6',
        textAlign: 'center',
        fontFamily: "'Manrope', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 500,
            margin: '0 0 16px',
          }}
        >
          Experiencia Potrerillos
        </h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.6, opacity: 0.85, margin: 0 }}>
          Este sitio está en pausa por el momento. ¡Volvemos pronto!
        </p>
      </div>
    </main>
  )
}
