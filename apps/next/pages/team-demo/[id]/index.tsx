import ReadPlayer from "app/features/players/read/index"

import dbConnect from "app/lib/dbConnect";
import Player, { Players } from "app/models/Player";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  player: Players;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }: GetServerSidePropsContext) => {
  await dbConnect();
  if (!params?.id) {
    return {
      notFound: true,
    };
  };
  const player = await Player.findById(params.id).lean();
  if (!player) {
    return {
      notFound: true,
    };
  };
  const serializedPlayer = JSON.parse(JSON.stringify(player));
  return {
    props: {
      player: serializedPlayer,
    },
  };
};

export default function GetPlayer({ player }: Props) {
  return (
    <ReadPlayer player={player} />
  );
};