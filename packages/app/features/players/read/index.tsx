

import { Players } from "app/models/Player";
import {
    Button,
    H2,
    H4,
    YStack,
    XStack,
    Avatar,
    Section,
} from '@my/ui';
import { Card, Paragraph } from 'tamagui'
import { TextLink } from "solito/link";
import TabsList from '../../../components/tabs';

type Props = {
    player: Players;
};

const PlayerPage = ({ player }: Props) => {
    return (
        <YStack marginTop="$8" ai="center" gap="$5">
            <Section gap="$4" p="$5" alignItems="center">
                <H2>Informations :</H2>

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

            <Section gap="$4" p="$5" alignItems="center">
                <H2>Statistiques :</H2>

                <TabsList />
            </ Section>
            
        </YStack>
    );
};


export default PlayerPage;