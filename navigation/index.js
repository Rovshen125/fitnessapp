
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PlanScreen,ProfileScreen,SeachScreen, WorkOutScreen } from '../screens'
import { NavigationContainer } from '@react-navigation/native'; // bunu əlavə et
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

export default function () {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={(props)=><TabBar {...props} />}
                screenOptions={{headerShown:false}}
            >
                <Tab.Screen  name='home' component={HomeScreen} />
                <Tab.Screen name='plan' component={PlanScreen} />
                <Tab.Screen name='search' component={SeachScreen} />
                <Tab.Screen name='work' component={WorkOutScreen} />
                <Tab.Screen name='profile' component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

