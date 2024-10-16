import Busca from "./Busca"

export default () => {
  return (
    <div className='grid m-auto w-9 border-round border-1 border-400'>
      {/* // div>h1{Exibir uma lista de...} */}
      <div className='col-12'>
        <div>
          <h1>Exibir uma lista de...</h1>
        </div>
      </div>
      <div className='col-12'>
        <Busca />
      </div>
    </div>
  )
}