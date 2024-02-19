import { InputHTMLAttributes } from 'react'
import './styles.css'

export default function FieldText ({...props}: InputHTMLAttributes<HTMLInputElement>) {
  return (<input type="text" className='container'  {...props} />)
}