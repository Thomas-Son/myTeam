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
import Header from "app/features/header/index"

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

    const [alias, setAlias] = useState("");
    const [pwd, setPwd] = useState("");

    const postData = async ({ alias, pwd }: FormData) => {
        try {
            const res = await fetch("/api/users/" + formId, {
                method: "GET",
                headers: {
                    Accept: contentType,
                    "Content-Type": contentType,
                },
                body: JSON.stringify({ alias, pwd }),
            });

            if (!res.ok) {
                throw new Error(res.status.toString());
            }

        } catch (error) {
            setMessage("Failed to find user");
        }
    };

    const formValidate = () => {
        let err: Error = {};
        if (!alias) err.alias = "Name is required";
        if (!pwd) err.pwd = "Pwd is required";
        return err;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errs = formValidate();

        if (Object.keys(errs).length === 0) {
            postData({ alias, pwd });
        } else {
            setErrors({ errs });
        }
    };

    return (
        <main>
            <Header />
            <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background" marginTop="$8">
                <H2>Connexion</H2>
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
                        Se connecter
                    </Button>
                </form>
            </YStack>
        </main>
    );
};

export default Signin;
