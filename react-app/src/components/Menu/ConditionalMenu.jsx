import React from 'react'
import MenuDeslogado from './MenuDeslogado/MenuDeslogado';
import MenuLogado from './MenuLogado/MenuLogado';

export default function ConditionalMenu({user}){
  if(user)
    return <MenuLogado/>
  else
    return <MenuDeslogado />
}