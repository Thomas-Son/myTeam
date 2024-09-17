import {
    Button,
    Label,
    Form,
    Input,
    H2,
    YStack,
    TextArea
} from '@my/ui';
import { useState } from "react";
import { useRouter } from "next/router";

interface FormData {
    name: string;
    post: string;
    height: number;
    weight: number;
    number: number;
    age: number;
    nationality: string;
    state: string;
}

interface Error {
    name?: string;
}

type Props = {
    formId: string;
    playerForm: FormData;
};

function AddPlayer() {

    const router = useRouter();
    const contentType = "application/json";
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const [name, setName] = useState("");
    const [post, setPost] = useState("");
    const [height, setHeight] = useState(200);
    const [weight, setWeight] = useState(90);
    const [number, setNumber] = useState(1);
    const [age, setAge] = useState(18);
    const [nationality, setNationality] = useState("");
    const [state, setState] = useState("Ok !");

    // const [form, setForm] = useState({
    //     name: "",
    //     post: "",
    //     height: 200,
    //     weight: 90,
    //     number: 1,
    //     age: 18,
    //     nationality: "",
    //     state: "Ok !"
    // });


    const postData = async ({name, post, height, weight, number, age, nationality, state}: FormData) => {
        try {
            const res = await fetch("/api/players", {
                method: "POST",
                headers: {
                    Accept: contentType,
                    "Content-Type": contentType,
                },
                body: JSON.stringify({name, post, height, weight, number, age, nationality, state}),
            });

            console.log(res)

            if (!res.ok) {
                throw new Error(res.status.toString());
            }

            router.push("/team-demo");
        } catch (error) {
            setMessage("Failed to add player");
        }
    };

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //     const target = e.target;
    //     const value = target.value;
    //     const name = target.name;

    //     setForm({
    //         ...form,
    //         [name]: value,
    //     });
    // };

    const formValidate = () => {
        let err: Error = {};
        if (!name) err.name = "Entrer le nom du joueur";
        return err;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errs = formValidate();

        if (Object.keys(errs).length === 0) {
            postData({name, post, height, weight, number, age, nationality, state})
        } else {
            setErrors({ errs });
        }
    };

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Ajouter un joueur à l'équipe</H2>
            
            <form onSubmit={handleSubmit}>
                <Label>Nom</Label>
                <Input
                    size="$4" borderWidth={2}
                    placeholder="Nom du joueur"
                    type="text"
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <Label htmlFor="post">Poste</Label>
                <Input
                    placeholder="Post du joueur"
                    type="text"
                    name="post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />

                <Label htmlFor="height">Taille</Label>
                <Input
                    placeholder="Taille du joueur"
                    type="number"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />

                <Label htmlFor="weight">Poids</Label>
                <Input
                    placeholder="Poids du joueur"
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />

                <Label htmlFor="number">Numéro</Label>
                <Input
                    placeholder="Numéro du joueur"
                    type="number"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />

                <Label htmlFor="age">Age</Label>
                <Input
                    placeholder="Age du joueur"
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <Label htmlFor="nationality">Nationalité</Label>
                <Input
                    placeholder="Nationalité du joueur"
                    type="text"
                    name="nationality"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                />

                <Label htmlFor="state">Etat</Label>
                <Input
                    placeholder="Etat du joueur"
                    type="text"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />

                <Button type="submit" className="btn" width="100%" marginTop="8px">
                    Ajouter
                </Button>
            </form>

        </YStack>
    );
};

export default AddPlayer;