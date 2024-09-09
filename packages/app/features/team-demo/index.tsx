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
                    <Card alignItems="center" p="$2" gap="$2" backgroundColor="$blue4" width={270}
                        height={300}
                        >
                        <H4 className="player-name">{player.name}</H4>
                        <YStack className="main-content" >
                            <Paragraph className="player-name">Nom : {player.name}</Paragraph>
                            <Paragraph className="player-name">Poste : {player.post}</Paragraph>
                            <Paragraph className="player-name">Taille : {player.height} cm</Paragraph>
                            <Paragraph className="player-name">Poids : {player.weight} kg</Paragraph>
                            <Paragraph className="player-name">Numéro : {player.number}</Paragraph>
                            <Paragraph className="player-name">Age : {player.age} ans</Paragraph>
                            <Paragraph className="player-name">Etat : {player.nationality}</Paragraph>
                        </YStack>


                        <Card.Footer orientation="horizontal" gap="$2">
                                <Link href={"/team-demo/" + player._id}>
                                <Button borderRadius="$4" size="$3" backgroundColor="$blue5">Voir</Button>
                                </Link>
                                <Link href={"/team-demo/" + player._id + "/modifier"}>
                                <Button borderRadius="$4" size="$3" backgroundColor="$blue5">Modifier</Button>
                                </Link>
                                <Link href={"/team-demo/" + player._id + "/supprimer"}>
                                <Button borderRadius="$4" size="$3" backgroundColor="$blue5">Supprimer</Button>
                                </Link>
                        </Card.Footer>

                    </Card>
                ))}
            </Section>
        </YStack>
    );
};

export default Team;