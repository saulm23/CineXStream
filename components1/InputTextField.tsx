'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import InputField from '@/components/InputTextField'

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  const handleLogin = () => {
    // Perform login logic here...
    // Then redirect:
    router.push('/home')
  }

  return (
    <div onKeyDown={handleKeyPress}>
      <InputField
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full mt-4 bg-black/80 text-white py-3 rounded-md"
      >
        Iniciar Sesión
      </button>
    </div>
  )
}

export default LoginForm
