import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SchedulePageCompany from '../pages/Company/SchedulePageCompany';
import InitialPageCompany from '../pages/Company/InitialPageCompany';
import PerfilPageCompany from '../pages/Company/PerfilPageCompany'; 
import HoursPageCompany from '../pages/Company/HoursPageCompany';

const Tab = createBottomTabNavigator();

function CompanyTabs(){
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
                component={InitialPageCompany} 
                options={{
                    tabBarLabel: 'Registro de Horarios',
                }}    
            />

            <Tab.Screen 
                name="Hours" 
                component={HoursPageCompany}
                options={{
                    tabBarLabel: 'Horários'
                }} 
            />

            <Tab.Screen 
                name="Schedule" 
                component={SchedulePageCompany} 
                options={{
                    tabBarLabel: 'Agenda',
                }}    
            />

            <Tab.Screen
                name="Perfil"
                component={PerfilPageCompany}
                options={{
                    tabBarLabel: 'Perfil'
                }}
            />
            
        </Tab.Navigator>
    );
}

export default CompanyTabs;