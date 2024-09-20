import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Player, { Players } from "app/models/Player";
import {
    Button,
    H3,
    YStack,
} from '@my/ui';
import { TextLink } from "solito/link";
import Header from "app/features/header/index"

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
        <main>
            <Header/>
            <YStack marginTop="$8" ai="center" gap="$5">
                <H3>Voulez-vous supprimer le joueur {player.name} ?</H3>
                <Button 
                    width="130px" 
                    height="45px" 
                    borderRadius="$4" 
                    size="$3" 
                    backgroundColor="$grey5" 
                    onClick={handleDelete}
                    borderWidth="$1"
                    animation="bouncy"
                    hoverStyle={{ scale: 0.925 }}
                    pressStyle={{ scale: 0.875 }}
                >
                    Supprimer
                </Button>
                <TextLink href={".."}>
                    <Button 
                        width="130px" 
                        height="45px" 
                        borderRadius="$4" 
                        size="$3" 
                        backgroundColor="$grey5"
                        borderWidth="$1"
                        animation="bouncy"
                        hoverStyle={{ scale: 0.925 }}
                        pressStyle={{ scale: 0.875 }}
                    >
                        Annuler
                    </Button>
                </TextLink>
                
                <p>{message}</p>
            </YStack>
        </main>
        
    );
};

export default DeletePlayer;