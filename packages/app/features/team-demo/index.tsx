import {
    Button,
    H2,
    H3,
    YStack,
    XStack,
    Section,
    Spinner
} from '@my/ui';
import { useEffect, useState } from "react";
import { TextLink } from "solito/link";
import TabsList2 from "../../components/tabs2";
import CardPlayer from '../../components/cardPlayer';

function Team() {

    const [allPlayers, setAllPlayers] = useState([]);

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
        <YStack marginTop="$8" ai="center" bg="$background">
            <H2>Panneau de gestion de l'équipe démo.</H2>
            <Section gap="$4" p="$5" alignItems="center">
                <H3>Liste des joueurs :</H3>

                <Button 
                    borderRadius="$4"
                    backgroundColor="$blue2"
                    width="160px"
                    animation="bouncy"
                    borderColor="$blue8"
                    hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue4", backgroundColor: "$blue3" }}
                    pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue5", backgroundColor: "$blue3" }}
                >
                    <TextLink href="/ajouter-joueur">Ajouter un joueur</TextLink>
                </Button>

                <XStack flexWrap="wrap" justifyContent="center" maxWidth="900px">

                    {!allPlayers ? (<Spinner size="large" color="$blue10" />
                    ) : (
                        allPlayers.map((player) => (

                        <TextLink href={"/team-demo/"}>
                            <CardPlayer data={player} />
                        </TextLink>

                    )))}
                </XStack>
            </Section>

            <Section gap="$4" alignItems="center">
                <H3>Statistiques :</H3>

                <TabsList2 />
            </Section>
        </YStack>
    );
};

export default Team;