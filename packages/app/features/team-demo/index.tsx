import Link from "next/link";
import {
    Button,
    H2,
    H3,
    H4,
    YStack,
    Section
} from '@my/ui';
import { Card, Paragraph } from 'tamagui'
import { useLink } from 'solito/navigation'

const Team = ({ players }) => {

    const linkProps = useLink({
        href: `team-demo/ajouter`,
    });

    return (
        <YStack f={1} ai="center" p="$4" bg="$background">
            <H2>Panneau de gestion de l'équipe démo.</H2>
            <Section gap="$4" p="$5" alignItems="center">
                <H3>Liste des joueurs :</H3>

                <Button {...linkProps}>Ajouter un joueur</Button>

                {players.map((player) => (
                    <Card alignItems="center" p="$2" gap="$2" backgroundColor="$grey4" width={270}
                        height={320}
                        >
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


                        <Card.Footer animation="bouncy" orientation="horizontal" gap="$2">
                                <Link href={"/team-demo/" + player._id}>
                                <Button borderRadius="$4" size="$3" backgroundColor="$grey5">Voir</Button>
                                </Link>
                                <Link href={"/team-demo/" + player._id + "/modifier"}>
                                <Button borderRadius="$4" size="$3" backgroundColor="$grey5">Modifier</Button>
                                </Link>
                                <Link href={"/team-demo/" + player._id + "/supprimer"}>
                                <Button borderRadius="$4" size="$3" backgroundColor="$grey5">Supprimer</Button>
                                </Link>
                        </Card.Footer>

                    </Card>
                ))}
            </Section>
        </YStack>
    );
};

export default Team;