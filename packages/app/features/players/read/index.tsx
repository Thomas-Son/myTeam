
import type { TabsContentProps } from 'tamagui'
import { H5, Separator, SizableText, Tabs } from 'tamagui'
import { Players } from "app/models/Player";
import {
    Button,
    H3,
    H4,
    YStack,
    XStack,
    Avatar,
    Section,
} from '@my/ui';
import { Card, Paragraph } from 'tamagui'
import { TextLink } from "solito/link";
import Chart from "../../../components/chart";

type Props = {
    player: Players;
};

const PlayerPage = ({ player }: Props) => {
    return (
        <YStack marginTop="$8" ai="center" gap="$5">
            <Section gap="$4" p="$5" alignItems="center">
                <H3>Informations :</H3>

                <Card
                    alignItems="center"
                    padding="$2"
                    backgroundColor="white"
                    width="360px"
                    height="500px"
                    gap="$3"
                    borderWidth="$1"
                    borderColor="$blue5"
                    animation="bouncy"
                    hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue6" }}
                    pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue7" }}
                    scale={0.9}
                >
                    <H4>{player.name}</H4>
                    <YStack alignItems="center" gap="$3">

                        <Avatar circular size="$12">
                            <Avatar.Image
                                accessibilityLabel="Cam"
                                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                            />
                            <Avatar.Fallback backgroundColor="$blue10" />
                        </Avatar>

                        <XStack >
                            <YStack padding="$4">
                                <Paragraph>Nom : {player.name}</Paragraph>
                                <Paragraph>Numéro : {player.number}</Paragraph>
                                <Paragraph>Poste : {player.post}</Paragraph>
                                <Paragraph>Taille : {player.height} cm</Paragraph>
                            </YStack>
                            <YStack padding="$4">
                                <Paragraph>Poids : {player.weight} kg</Paragraph>
                                <Paragraph>Age : {player.age} ans</Paragraph>
                                <Paragraph>Nationalité : {player.nationality}</Paragraph>
                                <Paragraph>Etat : {player.state}</Paragraph>
                            </YStack>
                        </XStack>

                    </YStack>
                    <Card.Footer animation="bouncy" orientation="horizontal" gap="$4">

                        <Button
                            borderRadius="$4"
                            backgroundColor="$blue5"
                            width="160px"
                            hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
                            pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}
                        >
                            <TextLink href={"/team-demo/" + player._id + "/modifier"}>Modifier</TextLink>
                        </Button>

                        <Button
                            borderRadius="$4"
                            backgroundColor="$blue5"
                            width="160px"
                            hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
                            pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}
                        >
                            <TextLink href={"/team-demo/" + player._id + "/supprimer"}>Supprimer</TextLink>
                        </Button>

                    </Card.Footer>
                </Card>
            </Section>

            <H3>Statistiques :</H3>

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
                        <Chart title="Moy. min par match" stat={39} statMax={60} />
                        <Chart title="Moy. points" stat={31} statMax={37} />
                    </YStack>
                </Tabs.Content>

                <Tabs.Content value="tab2" margin="$5">
                    <YStack gap="$4">
                        <Chart title="Lancer franc" stat={46} statMax={57} />
                        <Chart title="Tirs 2 points" stat={34} statMax={52} />
                        <Chart title="Tirs 3 points" stat={11} statMax={24} />
                    </YStack>
                </Tabs.Content>

                <Tabs.Content value="tab3" margin="$5">
                    <YStack gap="$4">
                        <Chart title="Offensif" stat={12} statMax={12} />
                        <Chart title="Deffensif" stat={6} statMax={8} />
                        <Chart title="Total" stat={18} statMax={18} />
                    </YStack>
                </Tabs.Content>

                <Tabs.Content value="tab4" margin="$5">
                    <YStack gap="$4">
                        <Chart title="Passes D." stat={10} statMax={16} />
                        <Chart title="Fautes" stat={12} statMax={12} />
                        <Chart title="Interceptions" stat={4} statMax={7} />
                        <Chart title="Balles P." stat={4} statMax={14} />
                        <Chart title="Contres" stat={11} statMax={11} />
                    </YStack>
                </Tabs.Content>
            </Tabs>
        </YStack>
    );
};


export default PlayerPage;