import { useState} from 'react';

export default function DropdownViajantesList({lista,setViajantes,viajantes}){
  const [idsFiltrados,setIdsFiltrados]=useState('')
  const [nomesFiltrados,setNomesFiltrados]=useState([])
  function handleChange(setProp){
    return (event)=>setProp(event.target.value)
  }
  function handleListaViajantes(event){
    let nomesViajantes = lista.map(value => value.nome)
    let idsViajantes = lista.map(value => value.id)
    let nomesId = {}
    for (let index = 0; index < nomesViajantes.length; index++) {
      nomesId[nomesViajantes[index]] = idsViajantes[index]
    }
    let nomesFiltrados = nomesViajantes.filter(el => el.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
    
    let idsViajantesSelecionados = [];
    for (let index = 0; index < nomesFiltrados.length; index++) {
      idsViajantesSelecionados.push(nomesId[nomesFiltrados[index]])
    }
    console.log(idsViajantesSelecionados)
    setNomesFiltrados(nomesFiltrados)
    setIdsFiltrados(idsViajantesSelecionados)
  }

  let loadedViajantes = [];
  const viajantesToOptions = (element, index) => <option value={element} />
  if(nomesFiltrados) loadedViajantes = nomesFiltrados.map(viajantesToOptions)
  return <div>
      <input list='viajantesList' placeholder="Digite a lista de viajantes" name="viajantes" autoComplete="off"
        required onChange={handleChange(setViajantes)} value={viajantes} 
        onInput={handleListaViajantes}
        />
      <datalist id="viajantesList">
        {loadedViajantes}
      </datalist>
      {/* Falta só consneguir renderizar um novo botão com as mesmas propriedades do 1º */}
      <button /*onClick={handlePlusButton}*/ >+</button> 
      <button /*onClick={handleMinusButton}*/ >-</button>
    </div>

}