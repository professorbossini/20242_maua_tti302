const Pedido = ({icone, titulo, descricao}) => {
  // const { icone, titulo, descricao } = props
  return (
    <div className="d-flex">
        <div className='d-flex align-items-center'>
          <i className={`${icone} fa-2x`}></i>
        </div>
        <div className='border flex-grow-1 pt-2 ms-2'>
          {/* h4.text-center{SSD} */}
          <h4 className='text-center'>{titulo}</h4>
          {/* p.text-center{SSD 500Gb} */}
          <p className='text-center'>{descricao}</p>
        </div>
    </div>    
  )
}

export default Pedido