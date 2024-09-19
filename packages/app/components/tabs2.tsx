import { YStack, Separator, SizableText, Tabs } from 'tamagui'
import Chart from "./chart";

function TabsList2() {
    return (
        <Tabs
            defaultValue="tab1"
            orientation="horizontal"
            flexDirection="column"
            borderRadius="$4"
            borderWidth="$1"
            overflow="hidden"
            borderColor="$blue5"
        >
            <Tabs.List
                separator={<Separator vertical borderColor="$blue5" />}
                disablePassBorderRadius="bottom"
                aria-label="Manage your account"
            >
                <Tabs.Tab flex={1} value="tab1">
                    <SizableText fontFamily="$body">Match</SizableText>
                </Tabs.Tab>
                <Tabs.Tab flex={1} value="tab2">
                    <SizableText fontFamily="$body">Tirs</SizableText>
                </Tabs.Tab>
                <Tabs.Tab flex={1} value="tab3">
                    <SizableText fontFamily="$body">Rebonds</SizableText>
                </Tabs.Tab>
                <Tabs.Tab flex={1} value="tab4">
                    <SizableText fontFamily="$body">Autres</SizableText>
                </Tabs.Tab>
            </Tabs.List>
            <Separator borderColor="$blue5" />
            <Tabs.Content value="tab1">
                <YStack gap="$4" margin="$5">
                    <Chart title="Matchs joués" stat={10} statMax={10} />
                    <Chart title="Matchs gagnés" stat={8} statMax={10} />
                    <Chart title="Matchs perdus" stat={2} statMax={10} />
                </YStack>
            </Tabs.Content>

            <Tabs.Content value="tab2" margin="$5">
                <YStack gap="$4">
                    <Chart title="% Lancer franc" stat={75} statMax={100} />
                    <Chart title="% Tirs 2 points" stat={71} statMax={100} />
                    <Chart title="% Tirs 3 points" stat={43} statMax={100} />
                </YStack>
            </Tabs.Content>

            <Tabs.Content value="tab3" margin="$5">
                <YStack gap="$4">
                    <Chart title="Offensif" stat={12} statMax={24} />
                    <Chart title="Deffensif" stat={6} statMax={12} />
                    <Chart title="Total" stat={18} statMax={36} />
                </YStack>
            </Tabs.Content>

            <Tabs.Content value="tab4" margin="$5">
                <YStack gap="$4">
                    <Chart title="Passes D." stat={10} statMax={20} />
                    <Chart title="Fautes" stat={12} statMax={24} />
                    <Chart title="Interceptions" stat={8} statMax={16} />
                    <Chart title="Balles P." stat={12} statMax={24} />
                    <Chart title="Contres" stat={11} statMax={22} />
                </YStack>
            </Tabs.Content>
        </Tabs>
    )
}

export default TabsList2;