// rafce: react arrow function component export
import React from 'react'

const Imagem = ({ src, alt, key, imgStyle }) => {
  // const { src, alt } = props
  return (
    <div 
      key={key}
      className={`${imgStyle} flex justify-content-center`}>
      <img
        className='border-round' 
        src={src} 
        alt={alt}/>
    </div>
  )
}

export default Imagem