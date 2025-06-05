'use client'

import React from 'react'

type InputFieldProps = {
  type?: string
  name?: string
  placeholder?: string
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  name,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  )
}

export default InputField
