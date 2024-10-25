import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({ pics, imgStyle }) => {
  return (
    pics.map(({src, alt, id}) => (
      <Imagem 
        src={src.small}
        alt={alt}
        key={id}
        imgStyle={imgStyle}
      />
    ))
  )
}

export default ListaImagens