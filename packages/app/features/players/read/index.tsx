
import Link from "next/link";
import Player, { Players } from "app/models/Player";
import {
    Button,
    H3,
    H4,
    YStack,
    Section
} from '@my/ui';
import { Card, Paragraph } from 'tamagui'

type Props = {
    player: Players;
};

const PlayerPage = ({ player }: Props) => {
    return (
        <YStack f={1} ai="center" p="$4" bg="$background">
            <Section gap="$4" p="$5" alignItems="center">
                <H3>Informations :</H3>

                <Card alignItems="center" p="$2" gap="$2" backgroundColor="$grey4" width={270} height={320}>
                    <H4>{player.name}</H4>
                    <YStack>
                        <Paragraph>Nom : {player.name}</Paragraph>
                        <Paragraph>Numéro : {player.number}</Paragraph>
                        <Paragraph>Poste : {player.post}</Paragraph>
                        <Paragraph>Taille : {player.height} cm</Paragraph>
                        <Paragraph>Poids : {player.weight} kg</Paragraph>
                        <Paragraph>Age : {player.age} ans</Paragraph>
                        <Paragraph>Nationalité : {player.nationality}</Paragraph>
                        <Paragraph>Etat : {player.state}</Paragraph>
                    </YStack>

                    <Card.Footer orientation="horizontal" gap="$2">
                        <Link href={"/team-demo/" + player._id + "/modifier"}>
                            <Button borderRadius="$4" size="$4" backgroundColor="$grey5">Modifier</Button>
                        </Link>
                        <Link href={"/team-demo/" + player._id + "/supprimer"}>
                            <Button borderRadius="$4" size="$4" backgroundColor="$grey5">Supprimer</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Section>
        </YStack>
    );
};

export default PlayerPage;