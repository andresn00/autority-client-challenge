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
  return (
    <button type='button' className={`${severityClassMap[severity]} p-2 px-3 rounded-md`} {...attributes}>
        {children}
    </button>
  )
}
