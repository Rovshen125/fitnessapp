
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CalendarScreen, HomeScreen, PlanScreen, ProfileScreen, SeachScreen, WorkOutScreen } from '../screens'
import { NavigationContainer } from '@react-navigation/native'; // bunu əlavə et
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNav = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='plan' component={PlanScreen} />
            <Tab.Screen name='search' component={SeachScreen} />
            <Tab.Screen name='work' component={WorkOutScreen} />
            <Tab.Screen name='profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default function () {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={TabNav} />
                <Stack.Screen name="calendar" component={CalendarScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

