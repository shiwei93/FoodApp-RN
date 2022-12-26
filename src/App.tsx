import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Home from '@/pages/home';
import Colors from '../assets/colors';

Feather.loadFont();

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShadowVisible: false,
                }}
            >
                <Stack.Group
                    screenOptions={{ headerStyle: { backgroundColor: Colors.background } }}
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: '',
                            headerLeft: () => {
                                return (
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 20,
                                        }}
                                        source={require('assets/images/profile.png')}
                                    />
                                );
                            },
                            headerRight: () => {
                                return <Feather name="menu" size={24} color={Colors.textDark} />;
                            },
                        }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
