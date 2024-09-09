import AddPlayer from "app/features/players/create/index";

const NewPlayer = () => {
    const playerForm = {
        name: "",
        post: "",
        height: 200,
        weight: 90,
        number: 0,
        age: 0,
        nationality: "",
        state: "Ok !"
    };

    return <AddPlayer formId="add-player-form" playerForm={playerForm} />;
};

export default NewPlayer;