import {
    Button,
    Label,
    H2,
    YStack,
} from '@my/ui';
import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

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

function UpdatePlayer({ formId, playerForm }: Props) {

    const router = useRouter();
    const contentType = "application/json";
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const [form, setForm] = useState({
        name: playerForm.name,
        post: playerForm.post,
        height: playerForm.height,
        weight: playerForm.weight,
        number: playerForm.number,
        age: playerForm.age,
        nationality: playerForm.nationality,
        state: playerForm.state
    });

    const putData = async (form: FormData) => {
        const { id } = router.query;

        try {
            const res = await fetch(`/api/players/${id}`, {
                method: "PUT",
                headers: {
                    Accept: contentType,
                    "Content-Type": contentType,
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error(res.status.toString());
            }

            const { data } = await res.json();

            mutate(`/api/players/${id}`, data, false);
            router.push("/team-demo");
        } catch (error) {
            setMessage("Failed to update player");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const formValidate = () => {
        let err: Error = {};
        if (!form.name) err.name = "Entrer le nom du joueur";
        return err;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errs = formValidate();

        if (Object.keys(errs).length === 0) {
            putData(form);
        } else {
            setErrors({ errs });
        }
    };

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Modifier un joueur</H2>
            <form onSubmit={handleSubmit} >
                <Label htmlFor="name">Nom</Label>
                <input
                    placeholder="Nom du joueur"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <Label htmlFor="post">Poste</Label>
                <input
                    placeholder="Post du joueur"
                    type="text"
                    name="post"
                    value={form.post}
                    onChange={handleChange}
                />

                <Label htmlFor="height">Taille</Label>
                <input
                    placeholder="Taille du joueur"
                    type="number"
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                />

                <Label htmlFor="weight">Poids</Label>
                <input
                    placeholder="Poids du joueur"
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                />

                <Label htmlFor="number">Numéro</Label>
                <input
                    placeholder="Numéro du joueur"
                    type="number"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                />

                <Label htmlFor="age">Age</Label>
                <input
                    placeholder="Age du joueur"
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                />

                <Label htmlFor="nationality">Nationalité</Label>
                <input
                    placeholder="Nationalité du joueur"
                    type="text"
                    name="nationality"
                    value={form.nationality}
                    onChange={handleChange}
                />

                <Label htmlFor="state">Etat</Label>
                <input
                    placeholder="Etat du joueur"
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                />

                <Button type="submit" className="btn">
                    Modifier
                </Button>
            </form>

            <p>{message}</p>
            <div>
                {Object.keys(errors).map((err, index) => (
                    <li key={index}>{err}</li>
                ))}
            </div>
        </YStack>
    );
};

export default UpdatePlayer;