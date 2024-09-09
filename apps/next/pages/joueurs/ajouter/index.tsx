import AddPlayer from "app/features/players/create/index";

const NewPlayer = () => {
    const playerForm = {
        name: ""
    };

    return <AddPlayer formId="add-player-form" playerForm={playerForm} />;
};

export default NewPlayer;