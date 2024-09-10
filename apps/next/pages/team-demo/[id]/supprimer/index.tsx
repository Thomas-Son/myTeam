import dbConnect from "app/lib/dbConnect";
import Player, { Players } from "app/models/Player";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import DeletePlayer from "app/features/players/delete/index";

interface Params extends ParsedUrlQuery {
    id: string;
}

type Props = {
    player: Players;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async({ params }: GetServerSidePropsContext) => {
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

export default function Delete({ player }: Props){
    return(
        <DeletePlayer player={player} />
    )
}