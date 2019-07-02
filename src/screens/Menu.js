import React from 'react'
import { createDrawerNavigator, createSwitchNavigator } from 'react-navigation'


import Home from './Tela_Usuario'
import Transporte_Usuario from './Seu_Transporte_Usuario'
import Contato_Usuario from './Contato_Usuario'
import Perfil_Usuario from './Perfil_Usuario'
import Telas_Iniciais from './Telas_Iniciais'



export default createDrawerNavigator({
    Home: Home,
    Perfil: Perfil_Usuario,
    Transporte: Transporte_Usuario,
    Contato: Contato_Usuario
}, { drawerWidth: 250 })
