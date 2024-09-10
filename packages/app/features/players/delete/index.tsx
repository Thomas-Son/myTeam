import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Player, { Players } from "app/models/Player";
import {
    Button,
    H3,
    YStack,
} from '@my/ui';

type Props = {
    player: Players;
};

function DeletePlayer({ player }: Props) {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const handleDelete = async () => {
        const layerID = router.query.id;

        try {
            await fetch(`/api/players/${layerID}`, {
                method: "Delete",
            });
            router.push("/team-demo");
        } catch (error) {
            setMessage("Failed to delete the player.");
        }
    };

    return (
        <YStack f={1} jc="center" ai="center" gap="$3" p="$4" bg="$background">
            <H3>Voulez-vous supprimer le joueur {player.name} ?</H3>
            <Button borderRadius="$4" size="$3" backgroundColor="$grey5" onClick={handleDelete}>Supprimer</Button>
            <Link href={".."}>
                <Button borderRadius="$4" size="$3" backgroundColor="$grey5">Annuler</Button>
            </Link>

            <p>{message}</p>
        </YStack>
    );
};

export default DeletePlayer;