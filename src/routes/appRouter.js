import { createNativeStackNavigator } from "@react-navigation/native-stack";

//
import Home from "../pages/Home";

const AppRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}

export default AppRouter;