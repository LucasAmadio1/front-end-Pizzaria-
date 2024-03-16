import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...props}: InputProps) {
  return (
    <input className={styles.input} {...props} />
  )
} 

export function TextArea({...props}: TextAreaProps) {
  return (
    <textarea className={styles.input} {...props}></textarea>
  )
}