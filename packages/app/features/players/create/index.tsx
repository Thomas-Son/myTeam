import {
    Button,
    Input,
    H2,
    YStack,
} from '@my/ui';
import { Form } from 'tamagui';
import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

interface FormData {
    name: string;
}

interface Error {
    name?: string;
}

type Props = {
    formId: string;
    playerForm: FormData;
    forNewPlayer?: boolean;
};

function AddPlayer({ formId, playerForm, forNewPlayer = true }: Props) {

    const router = useRouter();
    const contentType = "application/json";
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const [form, setForm] = useState({
        name: playerForm.name
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

            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error(res.status.toString());
            }

            const { data } = await res.json();

            mutate(`/api/players/${id}`, data, false); // Update the local data without a revalidation
            router.push("/team-demo");
        } catch (error) {
            setMessage("Failed to update player");
        }
    };

    const postData = async (form: FormData) => {
        try {
            const res = await fetch("/api/players", {
                method: "POST",
                headers: {
                    Accept: contentType,
                    "Content-Type": contentType,
                },
                body: JSON.stringify(form),
            });
            console.log("fail")
            console.log(res)

            if (!res.ok) {
                throw new Error(res.status.toString());
            }

            router.push("/team-demo");
        } catch (error) {
            setMessage("Failed to add player");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const target = e.target;
        const value =
            target.name === "poddy_trained"
                ? (target as HTMLInputElement).checked
                : target.value;
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
            forNewPlayer ? postData(form) : putData(form);
        } else {
            setErrors({ errs });
        }
    };

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Ajouter un joueur à l'équipe</H2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Nom du joueur"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="btn">
                    Ajouter
                </button>
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

export default AddPlayer;