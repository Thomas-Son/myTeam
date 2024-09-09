import Link from "next/link";

import {
    Button,
    H2,
    H3,
    H4,
    YStack,
    XStack,
} from '@my/ui';

const Team = ({ players }) => {
    return (
        <YStack f={1} ai="center" p="$4" bg="$background">
            <H2>Panneau de gestion de l'équipe démo.</H2>
            <YStack gap="$4" p="$5">
                <H3>Liste des joueurs :</H3>
                {players.map((player) => (
                    <YStack className="card" gap="$2">
                        <H4 className="player-name">{player.name}</H4>
                        <YStack className="main-content">
                            <p className="player-name">{player.name}</p>
                        </YStack>

                        <XStack className="btn-container" gap="$2">
                            <Link href={"/" + player._id + "/edit"}>
                                <Button className="btn edit">Edit</Button>
                            </Link>
                            <Link href={"/" + player._id}>
                                <Button className="btn view">View</Button>
                            </Link>
                        </XStack>
                    </YStack>
                ))}
            </YStack>
            <Link href={"/joueurs/ajouter"}><Button>Ajouter un joueur</Button></Link>
        </YStack>
    );
};

export default Team;