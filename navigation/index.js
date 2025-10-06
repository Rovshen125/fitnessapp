
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, InfoScreen } from '../screens'
import { NavigationContainer } from '@react-navigation/native'; // bunu əlavə et
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

export default function () {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={(props)=><TabBar {...props} />}
            >
                <Tab.Screen name='home' component={HomeScreen} />
                <Tab.Screen name='info' component={InfoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

