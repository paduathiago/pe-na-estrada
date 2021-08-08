import React from 'react'
import MenuDeslogado from './MenuDeslogado/MenuDeslogado';
import MenuLogado from './MenuLogado/MenuLogado';

export default function ConditionalMenu({user, setUser}){
  if(user)
    return <MenuLogado setUser={setUser}/>
  else
    return <MenuDeslogado />
}