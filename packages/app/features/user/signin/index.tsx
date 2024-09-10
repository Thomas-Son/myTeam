import {
    Label,
    Button,
    Input,
    H2,
    Paragraph,
    Separator,
    Sheet,
    useToastController,
    SwitchThemeButton,
    SwitchRouterButton,
    XStack,
    YStack,
} from '@my/ui';
import { Form } from 'tamagui';
import { useState } from "react";
import { useRouter } from "next/router";

interface FormData {
    alias: string;
    team: string;
    pwd: string;
}

interface Error {
    alias?: string;
    pwd?: string;
}

type Props = {
    formId: string;
    userForm: FormData;
};

function Signin({ formId, userForm }: Props) {
    const router = useRouter();
    const contentType = "application/json";
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const [form, setForm] = useState({
        alias: userForm.alias,
        team: userForm.team,
        pwd: userForm.pwd,
    });

    const postData = async (form: FormData) => {
        try {
            const res = await fetch("/api/users/" + formId, {
                method: "GET",
                headers: {
                    Accept: contentType,
                    "Content-Type": contentType,
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error(res.status.toString());
            }

        } catch (error) {
            setMessage("Failed to find user");
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
        if (!form.alias) err.alias = "Name is required";
        if (!form.pwd) err.pwd = "Pwd is required";
        return err;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errs = formValidate();

        if (Object.keys(errs).length === 0) {
            postData(form);
        } else {
            setErrors({ errs });
        }
    };

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Connexion</H2>
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
                    Se connecter
                </Button>
            </form>
        </YStack>
    );
};

export default Signin;
