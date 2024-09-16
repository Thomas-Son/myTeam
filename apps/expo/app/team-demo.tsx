import TeamDemo from '../../next/pages/team-demo'
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