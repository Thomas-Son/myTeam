import type { SizeTokens } from 'tamagui'
import { Paragraph, Progress, YStack } from 'tamagui'

function Chart({title, stat, statMax}) {
    const sizeProp = `$${4}` as SizeTokens

    return (
        <>
            <YStack height={60} width="600px" alignItems="center" gap="$4">
                <Paragraph height={30} opacity={0.8}>
                    {title} : {stat} / {statMax}
                </Paragraph>
                <Progress size={sizeProp} value={ (stat/statMax) * 100 }>
                    <Progress.Indicator animation="bouncy" backgroundColor="$blue7" />
                </Progress>
            </YStack>

        </>
    )
}

export default Chart;