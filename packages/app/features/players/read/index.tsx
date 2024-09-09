import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
        <div>
            <div className="card">
                <h5>{player.name}</h5>
                <div className="main-content">
                    <p>{player.name}</p>

                    <div className="btn-container">
                        <Link href={`/${player._id}/edit`}>
                            <button className="btn edit">Edit</button>
                        </Link>
                        <button className="btn delete" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {message && <p>{message}</p>}
        </div>
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