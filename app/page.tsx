'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Scene = dynamic(() => import('./components/Scene'), { ssr: false })

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        textAlign: 'center',
        background: 'rgba(0,0,0,0.7)',
        padding: '20px 40px',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '10px',
          background: 'linear-gradient(45deg, #ff6b6b, #ffd93d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(255,107,107,0.5)'
        }}>
          Бритая Горилла
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#aaa',
          marginBottom: '10px'
        }}>
          С заблокированным миостатином
        </p>
        <p style={{
          fontSize: '0.9rem',
          color: '#888',
          fontStyle: 'italic'
        }}>
          Используйте мышь для вращения • Колесико для зума
        </p>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 10,
        background: 'rgba(0,0,0,0.7)',
        padding: '15px 20px',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255,107,107,0.3)',
        maxWidth: '300px'
      }}>
        <h3 style={{
          fontSize: '1.1rem',
          marginBottom: '8px',
          color: '#ff6b6b'
        }}>
          💪 Эффекты блокировки миостатина:
        </h3>
        <ul style={{
          fontSize: '0.85rem',
          color: '#ccc',
          lineHeight: '1.6',
          listStyle: 'none'
        }}>
          <li>✓ Гипертрофия мышц +250%</li>
          <li>✓ Минимальный жировой слой</li>
          <li>✓ Увеличенная васкуляризация</li>
          <li>✓ Экстремальная мышечная масса</li>
        </ul>
      </div>

      <Suspense fallback={
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '1.5rem'
        }}>
          Загрузка...
        </div>
      }>
        <Scene />
      </Suspense>
    </main>
  )
}
