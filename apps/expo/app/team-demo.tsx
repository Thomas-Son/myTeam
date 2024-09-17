import TeamDemo from 'app/features/team-demo/index'
import { Stack } from 'expo-router'

export default function Screen() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Mon équipe',
                }}
            />
            <TeamDemo />
        </>
    )
}