import dbConnect from "app/lib/dbConnect";
import Player, { Players } from "app/models/Player";
import { GetServerSideProps } from "next";

import Team from "app/features/team-demo/index"

type Props = {
    players: Players[];
};

const TeamDemo = ({ players }: Props) => {
    return (
        <Team players={players} />
    );
};


export const getServerSideProps: GetServerSideProps<Props> = async () => {
    await dbConnect();

    const result = await Player.find({});

    const players = result.map((doc) => {
        const player = JSON.parse(JSON.stringify(doc));
        return player;
    });

    return { props: { players: players } };
};

export default TeamDemo;