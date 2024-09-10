import {
    Button,
    Label,
    H2,
    YStack,
} from '@my/ui';
import { Form } from 'tamagui';
import { useState } from "react";
import { useRouter } from "next/router";

interface FormData {
    alias: string;
    team: string;
    email: string;
    pwd: string;
}

interface Error {
    alias?: string;
    team?: string;
    email?: string;
    pwd?: string;
}

type Props = {
    formId: string;
    userForm: FormData;
};

function Signup({ formId, userForm }: Props) {

    const router = useRouter();
    const contentType = "application/json";
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const [form, setForm] = useState({
        alias: userForm.alias,
        team: userForm.team,
        email: userForm.email,
        pwd: userForm.pwd
    });


    const postData = async (form: FormData) => {
        try {
            const res = await fetch("/api/users", {
                method: "POST",
                headers: {
                    Accept: contentType,
                    "Content-Type": contentType,
                },
                body: JSON.stringify(form),
            });
            console.log(res)

            if (!res.ok) {
                throw new Error(res.status.toString());
            }

            router.push("/" + form.team);
        } catch (error) {
            setMessage("Failed to add user");
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
        if (!form.alias) err.alias = "Entrer le nom du joueur";
        if (!form.team) err.team = "Entrer le nom de l'équipe";
        if (!form.email) err.email = "Entrer un email";
        if (!form.pwd) err.pwd = "Entrer un mot de passe";
        return err;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errs = formValidate();

        if (Object.keys(errs).length === 0) {
            postData(form)
        } else {
            setErrors({ errs });
        }
    };

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Inscription</H2>
            <form onSubmit={handleSubmit} >
                <Label htmlFor="alias">Nom d'utilisateur</Label>
                <input
                    placeholder="Nom d'utilisateur"
                    type="text"
                    name="alias"
                    value={form.alias}
                    onChange={handleChange}
                    required
                />

                <Label htmlFor="team">Nom de l'équipe</Label>
                <input
                    placeholder="Nom de l'équipe"
                    type="text"
                    name="team"
                    value={form.team}
                    onChange={handleChange}
                    required
                />

                <Label htmlFor="email">Email</Label>
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <Label htmlFor="pwd">Mot de passe</Label>
                <input
                    placeholder="Mot de passe"
                    type="password"
                    name="pwd"
                    value={form.pwd}
                    onChange={handleChange}
                    required
                />

                <Button type="submit" className="btn">
                    S'inscrire
                </Button>
            </form>
        </YStack>
    );
};

export default Signup;