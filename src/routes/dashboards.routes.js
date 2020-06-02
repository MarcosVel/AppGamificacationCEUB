import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconFeat from 'react-native-vector-icons/Feather';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Perfil from '../pages/Perfil';
import Noticia from '../pages/Noticia';
import Conquista from '../pages/Conquista';
import Desafios from '../pages/Desafios';
import Ranking from '../pages/Ranking';
import Ticket from '../pages/Ticket';


const Tab = createMaterialBottomTabNavigator();

export default function DashboardsRoutes() {
  return (
        <Tab.Navigator
        initialRouteName="Perfil"
        activeColor="#F0CC25"  //Barra de navegação TabNavigation
        barStyle={{ backgroundColor: '#220536' }}
        /*tabBarOptions={{
          activeTintColor: '#F0CC25',
          activeBackgroundColor: '#220536',
          inactiveBackgroundColor: '#220536',          
        }}*/
        >
          <Tab.Screen name="Noticia" component={Noticia} options={{
          tabBarLabel: 'Notícia',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="newspaper-o" color={color} size={21} />
          ),
        }}/>
          {/* <Tab.Screen name="Conquista" component={Conquista} options={{
          tabBarLabel: 'Conquista',
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={23} />
          ),
        }}/> */}
          <Tab.Screen name="Desafios" component={Desafios} options={{
          tabBarLabel: 'Desafios',
          tabBarIcon: ({ color, size }) => (
            <IconFeat name="target" color={color} size={22} />
          ),
        }}/>
          <Tab.Screen name="Ranking" component={Ranking} options={{
          tabBarLabel: 'Ranking',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="trophy" color={color} size={22} />
          ),
        }}/>
          <Tab.Screen name="Ticket" component={Ticket} options={{
          tabBarLabel: 'Ticket',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="ticket" color={color} size={22} />
          ),
        }}/>
          <Tab.Screen name="Perfil" component={Perfil} options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" color={color} size={25} />
          ),
        }}/>

        </Tab.Navigator>
  )
}
