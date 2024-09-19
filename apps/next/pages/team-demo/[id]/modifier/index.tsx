import { useRouter } from "next/router";
import useSWR from "swr";
import UpdatePlayer from "app/features/players/update/index";

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

  return <UpdatePlayer />;
};

export default EditPlayer;