import React from 'react';
import { SvgProps } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigationState } from '@react-navigation/native';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';
import MenuIcon from '../assets/icons/menu.svg';
import ScanIcon from '../assets/icons/scan.svg';

import { styles } from './styles';
import { BOTTOM_TAB_ROUTES, COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const TabBarItem = ({ focused, svgComponent, label }: { focused: boolean; svgComponent: React.FC<SvgProps>; label: string }) => {
    return (
        <View style={styles.tabbarContent}>
            <Icon SVGComponent={svgComponent} size={34} />
            <Text
                style={[styles.tabbarLabel, focused ? styles.activeTabbar : styles.inactiveTabbar]}
            >
                {label}
            </Text>
        </View>
    );
};

const CustomHeader = ({ title, name }: { title?: string; name: string }) => {
    return (
        <LinearGradient
            colors={[COLORS.blue300, COLORS.blue500]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.headerContainer}
        >
            {name === 'ProductionOrder' ? (
                <TouchableOpacity style={styles.headerButtonStyle}>
                    <Icon SVGComponent={MenuIcon} color={COLORS.gray500} size={32} />
                </TouchableOpacity>
            ) : <View />}
            <Text style={styles.headerTitle}>{title}</Text>
            {name === 'ProductionOrder' ? (
                <TouchableOpacity style={styles.headerButtonStyle}>
                    <Icon SVGComponent={ScanIcon} color={COLORS.gray500} size={24} />
                </TouchableOpacity>
            ) : <View />}
        </LinearGradient>
    );
};


const BottomTabNavigator = () => {
    const currentRouteName = useNavigationState((state) => {
        const bottomTabRoutes = state.routes[state.index];
        const route = bottomTabRoutes.state?.routes[bottomTabRoutes.state.index || 0];
        return route?.name;
    });

    const currentRoute = BOTTOM_TAB_ROUTES.find((route) => route.name === currentRouteName);
    const isHeaderLabelPresent = currentRoute?.headerLabel !== '';

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={isHeaderLabelPresent ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
                translucent={isHeaderLabelPresent}
            />
            <Tab.Navigator
                initialRouteName="Overview"
                backBehavior="history"
                screenOptions={{
                    headerShown: true,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabbarContainer,
                }}>
                {
                    BOTTOM_TAB_ROUTES.map((item) => (
                        <Tab.Screen key={item.name} name={item.name} component={item.component} options={{
                            headerShown: item.headerLabel ? true : false,
                            tabBarIcon: ({ focused }) => TabBarItem({ focused, label: item.label, svgComponent: focused ? item.svgComponentActive : item.svgComponent }),
                            tabBarLabelPosition: 'beside-icon',
                            headerTitle: item.headerLabel,
                            headerStyle: styles.headerContainer,
                            header: () => CustomHeader({ title: item.headerLabel, name: item.name }),
                        }} />
                    ))
                }

            </Tab.Navigator>
        </View>
    );
};

export default BottomTabNavigator;
