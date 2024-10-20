import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

//defina um componente React que produz o seu primeiro nome, devolvendo um p
// function Nome(){
//   return <p>Rodrigo</p>
// }

// //defina um componente React que produz o seu sobrenome, devolvendo um p
// const Sobrenome = () => <p>Bossini</p>

//na função App, use ambos, como filhos de um div
// const App = () => {
//   return <div>
//     <Nome />
//     <Sobrenome />
//   </div>
// }

const App = () => {
  const estilosBotao = { marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8 }
  const textoDoRotulo = 'Nome:'
  const obterTextoDoBotao = () => "Enviar"
  const aoClicar = () => alert('clicou')
  return <div 
    style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label className='rotulo' htmlFor='nome' style={{display: 'block', marginBottom: 4}}>
        {textoDoRotulo}
      </label>
      {/* input[type=text]#nome */}
      <input type='text' id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8}}/>
      <button
        style={estilosBotao}
        onClick={() => aoClicar()}>
        {obterTextoDoBotao()}
      </button>
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
