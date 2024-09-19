import {
    Button,
    H4,
    YStack,
    XStack,
    Avatar
} from '@my/ui';
import { Card, Paragraph } from 'tamagui'
import { TextLink } from "solito/link";

function CardPlayer({data}) {
    return(
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
            $xs={{width: "300px", height: "400px"}}
        >
            <H4>{data.name}</H4>
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
                        <Paragraph>Nom : {data.name}</Paragraph>
                        <Paragraph>Numéro : {data.number}</Paragraph>
                        <Paragraph>Poste : {data.post}</Paragraph>
                        <Paragraph>Taille : {data.height} cm</Paragraph>
                    </YStack>
                    <YStack padding="$2">
                        <Paragraph>Poids : {data.weight} kg</Paragraph>
                        <Paragraph>Age : {data.age} ans</Paragraph>
                        <Paragraph>Nationalité : {data.nationality}</Paragraph>
                        <Paragraph>Etat : {data.state}</Paragraph>
                    </YStack>
                </XStack>

            </YStack>
            <Card.Footer animation="bouncy" orientation="horizontal" gap="$4">
                <TextLink href={"/team-demo/" + data._id + "/modifier"}>
                    <Button
                        borderRadius="$4"
                        backgroundColor="$blue5"
                        hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
                        pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}
                    >
                        Modifier
                    </Button>
                </TextLink>

                <TextLink href={"/team-demo/" + data._id + "/supprimer"}>
                    <Button
                        borderRadius="$4"
                        backgroundColor="$blue5"
                        hoverStyle={{ scale: 0.925, borderWidth: "$1", borderColor: "$blue7", backgroundColor: "$blue6" }}
                        pressStyle={{ scale: 0.875, borderWidth: "$1.5", borderColor: "$blue8", backgroundColor: "$blue6" }}
                    >
                        Supprimer
                    </Button>
                </TextLink>

            </Card.Footer>
        </Card>
    )
}

export default CardPlayer;