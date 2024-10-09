import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
// container, row, col-
const App = () => {
  return <div className='container mt-2 border'>
    <div className='row'>
      <div className='col-12'>
        <h1 className='text-center'>Seus pedidos</h1>
      </div>  
    </div>
    <div className='row'>
      <div className='col-12 col-md-6 col-lg-3 border'>
        <div className='card'>
          <div className='card-header text-muted'>22/04/2024</div>
          <div className='card-body d-flex'>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-3 border'></div>
      <div className='col-12 col-md-6 col-lg-3 border'></div>
      <div className='col-12 col-md-6 col-lg-3 border'></div>
    </div>
  </div>
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)