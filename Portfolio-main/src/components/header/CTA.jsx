import React from 'react'
import AdelGuizaniCV from '../../assets/AdelGuizaniCV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={AdelGuizaniCV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA