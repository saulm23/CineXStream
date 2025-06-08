import React from 'react'
import Link from 'next/link'
const LoginPage = () => {
  return (
    <div>
      <p className='text-3xl font-bold text-left mb-7'>Iniciar Sesion</p>
    
    <Link href="/" className="hover:underline hover:opacity-78">
      Haz olvidado tu contrasena?
    </Link>
  </div>
  )
}

export default LoginPage