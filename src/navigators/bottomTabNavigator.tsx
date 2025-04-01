import { View, Text, SafeAreaView } from 'react-native';
import { SvgProps } from 'react-native-svg';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';

import { styles } from './styles';
import { BOTTOM_TAB_ROUTES, COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

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

const CustomHeader = ({ title }: { title?: string }) => {
    return (
        <SafeAreaView>
            <LinearGradient
                colors={[COLORS.blue300, COLORS.blue500]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.headerContainer}
            >
                <Text style={styles.headerTitle}>{title}</Text>
            </LinearGradient>
        </SafeAreaView>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Overview"
            backBehavior='history'
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
                        header: () => CustomHeader({ title: item.headerLabel }),
                    }} />
                ))
            }

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
