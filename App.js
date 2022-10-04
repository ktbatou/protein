import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchInput from "./src/components/searchInput";
import HomeScreen from "./src/views/home";
import LigandsList from "./src/views/ligandsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Ligands"
          component={LigandsList}
          options={{
            headerStyle: {
              backgroundColor: "#DF8F8F",
            },
            headerTitle: () => <SearchInput/>,
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
