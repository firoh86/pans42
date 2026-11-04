export default function Card({ 
  costTop = "3€ ING", 
  costBottom = "3€ ING", 
  title = "Cheddar", 
  subtitle = "BURGER", 
  imageSrc, 
  bgColor = "#d4ac0d"
}) {
  return (
    <div style={{
      /* 1. Proporción y tamaño dinámico */
      aspectRatio: '1236 / 1822',
      width: '12.5vw',
      minWidth: '100px', // Previene que se vuelva microscópica en pantallas muy pequeñas
      
      /* 2. Estilos del contenedor */
      backgroundColor: bgColor,
      borderRadius: '1vw', // Bordes redondeados proporcionales
      border: '0.4vw solid #fff', // Borde blanco proporcional
      position: 'relative',
      boxShadow: '0 0.4vw 0.8vw rgba(0,0,0,0.3)',
      boxSizing: 'border-box',
      
      /* 3. Disposición del contenido */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8%', // Espaciado interno en porcentaje
      overflow: 'hidden', // Evita que elementos se salgan
      fontFamily: 'sans-serif',
      color: '#fff',
      userSelect: 'none'
    }}>
      
      {/* INSIGNIA SUPERIOR */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        color: '#333',
        padding: '6% 10% 8% 8%',
        borderBottomRightRadius: '0.8vw',
        fontSize: '0.75vw',
        fontWeight: 'bold',
        lineHeight: 1.1,
        textAlign: 'center',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
      }}>
        {costTop}
      </div>

      {/* CONTENIDO CENTRAL (Imagen + Títulos) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginTop: '10%'
      }}>
        {/* Contenedor flexible de la imagen */}
        <div style={{ 
          width: '55%', 
          height: '45%', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '5%'
        }}>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
            />
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: 'rgba(0,0,0,0.15)', 
              borderRadius: '0.5vw' 
            }} />
          )}
        </div>

        {/* Textos escalables */}
        <h3 style={{ 
          margin: 0, 
          fontSize: '0.95vw', 
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
          lineHeight: 1.1
        }}>
          {title}
        </h3>
        
        <span style={{ 
          fontSize: '0.7vw', 
          fontWeight: 'bold', 
          letterSpacing: '0.05vw', 
          opacity: 0.9,
          marginTop: '2%'
        }}>
          {subtitle}
        </span>
      </div>

      {/* INSIGNIA INFERIOR */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        color: '#333',
        padding: '8% 8% 6% 10%',
        borderTopLeftRadius: '0.8vw',
        fontSize: '0.75vw',
        fontWeight: 'bold',
        lineHeight: 1.1,
        textAlign: 'center',
        boxShadow: '-2px -2px 5px rgba(0,0,0,0.1)'
      }}>
        {costBottom}
      </div>

    </div>
  );
}