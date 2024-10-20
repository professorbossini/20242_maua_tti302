import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Feedback from './Feedback'
// container, row, col-
const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Ainda não chegou'
  const funcaoOK = () => alert ('Agradecemos o feedback')
  const funcaoNOK = () => alert('Verificaremos o ocorrido')
  const componenteFeedback = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
  return <div className='container mt-2 border'>
    <div className='row'>
      <div className='col-12'>
        <h1 className='text-center'>Seus pedidos</h1>
      </div>  
    </div>
    <div className='row'>
      <div className='col-12 col-md-6 col-xxl-3 border'>
        <Pedido 
          data="22/04/2024"
          icone="fa-solid fa-hdd"
          titulo="SSD"
          descricao="SSD 500Gb"/>
        {componenteFeedback}
      </div>
      <div className='col-12 col-md-6 col-xxl-3 border'>
        <Pedido 
          data="23/04/2024"
          icone="fa-solid fa-laptop"
          titulo="Notebook"
          descricao="Notebook i7 16Gb" />  
        {componenteFeedback}
      </div>
      <div className='col-12 col-md-6 col-xxl-3 border'>
        <Pedido 
          data="22/05/2024"
          icone="fa-solid fa-headphones fa-shake"
          titulo="Fone de ouvido"
          descricao="Fone de ouvido da cor preta" />
        {componenteFeedback}
      </div>
      <div className='col-12 col-md-6 col-xxl-3 border'>
        <Pedido 
          data="30/04/2024"
          icone="fa-solid fa-microchip"
          titulo="Processador Intel"
          descricao="i7 13 geração 2.5Ghz" />
        {componenteFeedback}
      </div>
    </div>
  </div>
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)