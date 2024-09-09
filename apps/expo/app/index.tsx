import { Home } from 'app/features/home/index'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <Stack>
      <Stack.Screen
      name='index'
        options={{
          title: 'Home',
        }}
      />
      <Home />
    </Stack>
  )
}
