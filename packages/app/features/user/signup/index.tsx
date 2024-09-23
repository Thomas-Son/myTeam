import {
    Button,
    Label,
    H2,
    YStack,
    Input
} from '@my/ui';
import { Form } from 'tamagui';
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "app/features/header/index"

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
    const [alias, setAlias] = useState("");
    const [team, setTeam] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const postData = async ({alias, team, email, pwd}: FormData) => {
        try {
            const res = await fetch("/api/users", {
                method: "POST",
                headers: {
                    Accept: contentType,
                    "Content-Type": contentType,
                },
                body: JSON.stringify({ alias, team, email, pwd }),
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
            postData({ alias, team, email, pwd })
        } else {
            setErrors({ errs });
        }
    };

    return (
        <main>
            <Header />
            <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background" marginTop="$8">
                <H2>Inscription</H2>
                <form onSubmit={handleSubmit} >
                    <Label htmlFor="alias">Nom d'utilisateur</Label>
                    <Input
                        placeholder="Nom d'utilisateur"
                        type="text"
                        name="alias"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        required
                    />

                    <Label htmlFor="team">Nom de l'équipe</Label>
                    <Input
                        placeholder="Nom de l'équipe"
                        type="text"
                        name="team"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                        required
                    />

                    <Label htmlFor="email">Email</Label>
                    <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Label htmlFor="pwd">Mot de passe</Label>
                    <Input
                        placeholder="Mot de passe"
                        type="password"
                        name="pwd"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />

                    <Button type="submit" margin="auto" marginTop="$3.5">
                        S'inscrire
                    </Button>
                </form>
            </YStack>
        </main>
    );
};

export default Signup;