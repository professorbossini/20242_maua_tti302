const Cartao = (props) => {
  return (
    <div className='card'>
      <div className='card-header'>{props.cabecalho}</div>
      <div className='card-body'>
        {props.children}
      </div>
    </div>
  )
}
