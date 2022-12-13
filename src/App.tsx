import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/pages/home';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShadowVisible: false,
                }}
            >
                <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#F9F9FB' } }}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: 'React Native',
                        }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
