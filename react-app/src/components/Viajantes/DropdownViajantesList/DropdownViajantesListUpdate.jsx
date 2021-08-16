import { useState} from 'react';

export default function DropdownViajantesList({
  lista,setViajantes,idsFiltrados,setIdsFiltrados,nomesFiltrados,setNomesFiltrados,
  viajantesInput,setViajantesInput,viajantesFinais,setViajantesFinais,viajantesFinaisNomes,
  setViajantesFinaisNomes
}){
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
    setIdsFiltrados(idsViajantesSelecionados)
    
    setNomesFiltrados(nomesFiltrados)

  }

  function updateViajantes(){
    let result="[ "
    let nomesViajantes = lista.map(value => value.nome)
    let idsViajantes = lista.map(value => value.id)
    let idNomes = {}
    for (let index = 0; index < idsViajantes.length; index++) {
      idNomes[idsViajantes[index]] = nomesViajantes[index]
    }
    let resultNomes=""
    for(let v in viajantesFinais){
      if(v==viajantesFinais.length-1&&viajantesFinais.length!=1){
        resultNomes+=" e "
        result+=", "
      }
      else if(v!=0){
        result+=", "
        resultNomes+=", "
      }
      result+=viajantesFinais[v]
      resultNomes+=idNomes[viajantesFinais[v]]
    }
    result+=" ]"
    if(viajantesFinais.length>0)
      resultNomes+="."
    setViajantesFinaisNomes(resultNomes)
    setViajantes(result)
  }

  function handlePlusButton(event){
    let nomesViajantes = lista.map(value => value.nome)
    let idsViajantes = lista.map(value => value.id)
    let nomesId = {}
    for (let index = 0; index < nomesViajantes.length; index++) {
      nomesId[nomesViajantes[index]] = idsViajantes[index]
    }
    let id=nomesId[event.target.parentNode.firstChild.value]
    if (!(viajantesFinais.includes(id))&&typeof id !== 'undefined') {
      viajantesFinais.push(id)
      updateViajantes()
    }
  }

  function handleMinusButton(event){
    let nomesViajantes = lista.map(value => value.nome)
    let idsViajantes = lista.map(value => value.id)
    let nomesId = {}
    for (let index = 0; index < nomesViajantes.length; index++) {
      nomesId[nomesViajantes[index]] = idsViajantes[index]
    }
    let id=nomesId[event.target.parentNode.firstChild.value]

    if (viajantesFinais.includes(id)) {
      viajantesFinais.splice(viajantesFinais.indexOf(id),1)
      updateViajantes()
    }
    
  }

  let loadedViajantes = [];
  const viajantesToOptions = (element, index) => <option value={element} />
  if(nomesFiltrados) loadedViajantes = nomesFiltrados.map(viajantesToOptions)
  return <div>
      <input list='viajantesList' placeholder="Digite a lista de viajantes" name="viajantes" autoComplete="off"
        required onChange={handleChange(setViajantesInput)} value={viajantesInput} 
        onInput={handleListaViajantes}
        />
      <datalist id="viajantesList">
        {loadedViajantes}
      </datalist>
      <button type="button" onClick={handlePlusButton} >+</button> 
      <button type="button" disabled={viajantesFinais.length>0? false : true} onClick={handleMinusButton} >-</button>
      <p>{viajantesFinaisNomes}</p>
    </div>

}