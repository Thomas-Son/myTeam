import {
    Button,
    Label,
    Input,
    H2,
    YStack
} from '@my/ui';
import React, { useState } from "react";
import { useRouter } from "next/router";
import SelectForm from '../../../components/select';
import Header from "app/features/header/index"

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
    const [state, setState] = useState("Ok");

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

    const items = [
        { name: 'Ok' },
        { name: 'Blessé' },
        { name: 'Repos' }
    ]

    const items2 = [
        { name: 'BEL' },
        { name: 'BRA' },
        { name: 'CDN' },
        { name: 'CHN' },
        { name: 'DEU' },
        { name: 'ESP' },
        { name: 'FRA' },
        { name: 'JAP' },
        { name: 'KOR' },
        { name: 'USA' }
    ]

    const items3 = [
        { name: 'PG' },
        { name: 'SG' },
        { name: 'SF' },
        { name: 'PF' },
        { name: 'C' }
    ]

    return (
        <main>
            <Header/>
            <YStack marginTop="$8" ai="center" gap="$5">
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
                    <SelectForm value={post} setValue={setPost} title={"Poste du joueur"} list={items3} />

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
                    <SelectForm value={nationality} setValue={setNationality} title={"Nationalité du joueur"} list={items2} />

                    <Label htmlFor="state">Etat</Label>
                    <SelectForm value={state} setValue={setState} title={"Etat du joueur"} list={items} />

                    <Button type="submit" className="btn" width="100%" marginTop="8px">
                        Ajouter
                    </Button>
                </form>

            </YStack>
        </main>
        
    );
};

export default AddPlayer;