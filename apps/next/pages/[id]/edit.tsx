import { useRouter } from "next/router";
import useSWR from "swr";
import AddPlayer from "app/features/players/create/index";

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPlayer = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: player,
    error,
    isLoading,
  } = useSWR(id ? `/api/players/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!player) return null;

  const playerForm = {
    name: player.name,
  };

  return <AddPlayer formId="edit-player-form" playerForm={playerForm} forNewPlayer={false} />;
};

export default EditPlayer;