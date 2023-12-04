import React from 'react'
import type { ComponentPropsWithoutRef } from 'react';
type Severity = 'primary' | 'plain' | 'danger'

type Props = ComponentPropsWithoutRef<'button'> & {
  severity?: Severity
}

const severityClassMap: {
  [x in Severity]: string
} = {
  primary: 'bg-indigo-500 text-white',
  plain: '',
  danger: 'bg-red-500 text-white'
}
export const Button = ({ severity = 'primary', children, ...attributes }: Props) => {
  const baseClasses = `${severityClassMap[severity]} p-2 px-3 rounded-md disabled:bg-slate-300`
  attributes.className = `${baseClasses} ${attributes.className}`

  return (
    <button type='button' {...attributes}>
        {children}
    </button>
  )
}
