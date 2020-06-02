import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import TelaLogin from './pages/TelaLogin';
import EsqueciSenha from './pages/EsqueciSenha';
import Detail from './pages/Detail';
import Incidents from './pages/Incidents'; // Teste para TabNavigation
import LoadingLogin from './pages/LoadingLogin';
import Configuracoes from './pages/Configuracoes';

import DashboardsRoutes from './routes/dashboards.routes';

export default function Routes() {
    return (
            <AppStack.Navigator screenOptions={{ 
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}>

                <AppStack.Screen name="TelaLogin" component={TelaLogin} />
                <AppStack.Screen name="EsqueciSenha" component={EsqueciSenha} />
                <AppStack.Screen name="LoadingLogin" component={LoadingLogin} />
                <AppStack.Screen name="Noticia" component={DashboardsRoutes} />
                <AppStack.Screen name="Perfil" component={DashboardsRoutes} />
                <AppStack.Screen name="Configuracoes" component={Configuracoes} />
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
    );
}