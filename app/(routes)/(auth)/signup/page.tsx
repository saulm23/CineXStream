import { Checkbox } from '@/components/ui/checkbox'
import { Link } from 'lucide-react'
import React from 'react'
import SignUpForm from './SignUpForm/SignUpForm'

const signup = () => {
  return (
   <div>
     
      <SignUpForm />
      <Link href="/" className="text-white opacity-80 hover:underline">
        ¿Has olvidado tu contraseña?
      </Link>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="remember" className="border-white" />
        <label
          htmlFor="remember"
          className="text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Recuérdame
        </label>
      </div>

      <div className="mt-6 flex gap-1">
        <p className="text-white opacity-70">¿Ya tienes una cuenta?</p>
        <Link
          href="/login"
          className="text-white font-semibold hover:underline"
        >
          Inicia Sesion
        </Link>
      </div>
    </div>
  )
}

export default signup
