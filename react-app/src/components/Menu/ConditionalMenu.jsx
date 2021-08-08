import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MenuDeslogado from './MenuDeslogado/MenuDeslogado';
import MenuLogado from './MenuLogado/MenuLogado';

export default function ConditionalMenu({user, setUser}){
  if(user)
    return <MenuLogado setUser={setUser}/>
  else
    return <MenuDeslogado />
}