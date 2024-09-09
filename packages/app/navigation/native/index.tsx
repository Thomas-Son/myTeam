import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../../features/home/index'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  )
}