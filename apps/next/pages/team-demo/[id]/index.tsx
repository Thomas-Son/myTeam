import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "app/lib/dbConnect";
import Player, { Players } from "app/models/Player";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  Button,
  H2,
  H3,
  H4,
  YStack,
  Section
} from '@my/ui';
import { Card, Paragraph } from 'tamagui'

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  player: Players;
};

const PlayerPage = ({ player }: Props) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleDelete = async () => {
    const layerID = router.query.id;

    try {
      await fetch(`/api/players/${layerID}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the player.");
    }
  };

  return (
    <YStack f={1} ai="center" p="$4" bg="$background">
      <Section gap="$4" p="$5" alignItems="center">
        <H3>Informations :</H3>

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
      </Section>
    </YStack>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}: GetServerSidePropsContext) => {
  await dbConnect();

  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  const player = await Player.findById(params.id).lean();

  if (!player) {
    return {
      notFound: true,
    };
  }

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  const serializedPlayer = JSON.parse(JSON.stringify(player));

  return {
    props: {
      player: serializedPlayer,
    },
  };
};

export default PlayerPage;
