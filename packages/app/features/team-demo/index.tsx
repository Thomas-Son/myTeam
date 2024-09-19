import {
    Button,
    H2,
    H3,
    H4,
    YStack,
    XStack,
    Avatar,
    Section
} from '@my/ui';
import { Card, Paragraph } from 'tamagui'
import { useEffect, useState } from "react";
import { TextLink } from "solito/link";

function Team() {

    const [allPlayers, setAllPlayers] = useState();

    useEffect(() => {
        async function getData() {
            try {
                const posts = await (await fetch("/api/players")).json();
                setAllPlayers(posts.data);
                console.log(posts.data)
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return (
        <YStack ai="center" p="$4" bg="$background">
            <H2>Panneau de gestion de l'équipe démo.</H2>
            <Section gap="$4" p="$5" alignItems="center">
                <H3>Liste des joueurs :</H3>

                <Button 
                    borderRadius="$4"
                    // backgroundColor="$blue4"
                    borderWidth="$1"
                    // borderColor="$blue5"
                    animation="bouncy"
                    hoverStyle={{ scale: 0.925 }}
                    // , borderWidth: "$1", borderColor: "$blue5", backgroundColor: "$blue4"
                    pressStyle={{ scale: 0.875 }}
                    // , borderWidth: "$1.5", borderColor: "$blue5", backgroundColor: "$blue4"
                >
                    <TextLink href="/ajouter-joueur">Ajouter un joueur</TextLink>
                </Button>

                <XStack flexWrap="wrap" justifyContent="center" maxWidth="900px">
                    {!allPlayers ? (null
                    ) : (
                        allPlayers.map((player) => (

                            <TextLink href={"/team-demo/" + player._id}>
                            <Card 
                                alignItems="center" 
                                padding="$2" 
                                backgroundColor="white" 
                                width="260px" 
                                height="400px" 
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

                                    <Avatar circular size="$10">
                                        <Avatar.Image
                                            accessibilityLabel="Cam"
                                            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                        />
                                        <Avatar.Fallback backgroundColor="$blue10" />
                                    </Avatar>

                                    <XStack >
                                        <YStack padding="$2">
                                            <Paragraph>Nom : {player.name}</Paragraph>
                                            <Paragraph>Numéro : {player.number}</Paragraph>
                                            <Paragraph>Poste : {player.post}</Paragraph>
                                            <Paragraph>Taille : {player.height} cm</Paragraph>
                                        </YStack>
                                        <YStack padding="$2">
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
                                        hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor:"$blue6" }}
                                        pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}
                                    >
                                        <TextLink href={"/team-demo/" + player._id + "/modifier"}>Modifier</TextLink>
                                    </Button>

                                    <Button 
                                        borderRadius="$4" 
                                        backgroundColor="$blue5"
                                        hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
                                        pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}
                                    >
                                        <TextLink href={"/team-demo/" + player._id + "/supprimer"}>Supprimer</TextLink>
                                    </Button>

                                </Card.Footer>
                        </Card>
                        </TextLink>

                    )))}
                </XStack>
            </Section>
        </YStack>
    );
};

export default Team;