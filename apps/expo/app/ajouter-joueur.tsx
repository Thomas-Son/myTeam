import NewPlayer from '../../next/pages/ajouter-joueur'
import { Stack } from 'expo-router'

export default function Screen() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Ajouter',
                }}
            />
            <NewPlayer />
        </>
    )
}