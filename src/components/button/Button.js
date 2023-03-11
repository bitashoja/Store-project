import React from 'react'
import './button.css'
import { FaRegCircle } from 'react-icons/fa'
import { CgChevronRight } from 'react-icons/cg'


export default function Button({ title , className }) {
  return (
    
    
   <button
     className={className}  
   >
    <FaRegCircle className="button-icon1" />
    <CgChevronRight className="button-icon2" />
       { title }
   </button>
  )
}
