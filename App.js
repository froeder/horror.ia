import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./screens/home/HomeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => <Icon name="home" size={20} color="#FFF" />,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => <Icon name="home" size={20} color="#FFF" />,
          }}
          name="Sobre"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
