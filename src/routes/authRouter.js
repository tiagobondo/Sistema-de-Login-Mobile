import { createNativeStackNavigator } from "@react-navigation/native-stack";

//
import SigIn from "../pages/SigIn";
import SigUp from "../pages/SigUp";

const AuthRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen
        name="SigIn"
        component={SigIn}
        options={{
          headerShown: false
        }}
      />

      <Screen
        name="SigUp"
        component={SigUp}
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}

export default AuthRouter;