import { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
      {children}
    </span>
  )
}
