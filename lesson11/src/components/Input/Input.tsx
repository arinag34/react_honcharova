import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputProps = {
  label: string
  name: string
  error?: string | undefined
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function Input({ label, name, error, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...props} />
      {error ? <span role="alert">{error}</span> : null}
    </>
  )
}
