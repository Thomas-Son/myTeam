import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import TeamDemo from "../../features/team-demo/index"

const Stack = createNativeStackNavigator<{
  home: undefined,
  "team-demo": undefined,
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Bienvenue',
        }}
      />
      <Stack.Screen
        name="team-demo"
        component={TeamDemo}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  )
}