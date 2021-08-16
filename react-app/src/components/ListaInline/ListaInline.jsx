import { Link } from 'react-router-dom';
import './ListaInline.css'

export default function ListaInline({itens,itensEnvolvidos,ifNone,tituloAttr,rota, userId}){
  let listedItens = [];
  let loadedItens = [];
  const itensToLista = (element, index) => {
    return {
      titulo:` ${element[tituloAttr]},`,
      id: element.id,
    }
  }
  const itensToDiv = (element, index) => {
    let url;
    if(element.id == userId){
      url =`/me`
    }
    else{
      url=`/${rota}/${element.id}`;
    }
    return <div className="itemNome"><Link to={url}>{element.titulo}</Link></div>
  }
  let hasItens=false;
  if(itens) 
    if(itens.length)
      hasItens=true
  if(hasItens){
    listedItens = itens.map(itensToLista)
    let listSize=listedItens.length
    let sizLast=listedItens[listSize-1].titulo.length
    listedItens[listSize-1].titulo=listedItens[listSize-1].titulo.substr(0,sizLast-1);
    loadedItens = listedItens.map(itensToDiv)
    return <p>{itensEnvolvidos}:{loadedItens}.</p>
  } else {
    return <p>{ifNone}</p>
  }
}