import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InitialPage from '../pages/Client/InitialPage';
import SchedulePage from '../pages/Client/SchedulePage';
import PerfilPage from '../pages/Client/PerfilPage';

const Tab = createBottomTabNavigator();

function ClientTabs(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#ffdb00',
                    borderTopColor: '#ffdb00',
                    height: 30,
                },
                inactiveTintColor: '#fff',
                activeTintColor: '#000'
            }}
        >
            <Tab.Screen 
                name="Initial" 
                component={InitialPage} 
                options={{
                    tabBarLabel: 'Página Inicial',
                }}    
            />
            <Tab.Screen 
                name="Schedule" 
                component={SchedulePage} 
                options={{
                    tabBarLabel: 'Agenda'
                }}    
            />
            <Tab.Screen 
                name="Perfil" 
                component={PerfilPage}
                options={{
                    tabBarLabel: 'Perfil'
                }} 
            />
        </Tab.Navigator>
    );
}

export default ClientTabs;