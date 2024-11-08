const Redux = require('redux')
const { combineReducers, createStore } = Redux

//função criadora de ação
//ela cria a ação de pedido de novo contrato
const criarContrato = (nome, taxa) => {
  //esse objeto que ela devolve é uma ação
  return {
    type: 'CRIAR_CONTRATO',
    dados: {
      nome, taxa
    }
  }
}

const cancelarContrato = (nome) => {
  return {
    type: 'CANCELAR_CONTRATO',
    dados: { nome }
  }
}

const solicitarCashback = (nome, valor) => {
  return {
    type: 'CASHBACK',
    dados: {
      nome, valor
    }
  }
}

//essa função é uma reducer
//ela lida com o histórico de pedidos de cashback
const historicoDePedidosDeCashback = (historicoDePedidosDeCashbackAtual = [], acao) => {
  if (acao.type === 'CASHBACK'){
    return [
      ...historicoDePedidosDeCashbackAtual,
      acao.dados
    ]  
  }
  return historicoDePedidosDeCashbackAtual
}

const caixa = (dinheiroEmCaixa = 0, acao) => {
  if(acao.type === 'CASHBACK'){
    return dinheiroEmCaixa - acao.dados.valor
  }
  if (acao.type === 'CRIAR_CONTRATO'){
    return dinheiroEmCaixa + acao.dados.taxa
  }
  return dinheiroEmCaixa
}

const contratos = (listaDeContratosAtual = [], acao) => {
  if(acao.type === 'CRIAR_CONTRATO'){
    return [
      ...listaDeContratosAtual,
      acao.dados
    ]
  }
  if(acao.type === 'CANCELAR_CONTRATO'){
    return listaDeContratosAtual.filter(c => c.nome !== acao.dados.nome)
  }
  return listaDeContratosAtual
}

//combinar todos os reducers
const todosOsReducers = combineReducers({
  historicoDePedidosDeCashback,
  caixa,
  contratos
})

const store = createStore(todosOsReducers)

console.log(store.getState())
const acaoContratoJose = criarContrato('José', 50)
store.dispatch(acaoContratoJose)
console.log(store.getState())
const acaoContratoMaria = criarContrato('Maria', 50)
store.dispatch(acaoContratoMaria)
console.log(store.getState())
const acaoCashbackMaria = solicitarCashback('Maria', 10)
store.dispatch(acaoCashbackMaria)
console.log(store.getState())
const acaoCashbackJose = solicitarCashback('José', 20)
store.dispatch(acaoCashbackJose)
console.log(store.getState())
const acaoCancelaContratoMaria = cancelarContrato('Maria')
store.dispatch(acaoCancelaContratoMaria)
console.log(store.getState())