import {
    Button,
    Input,
    H2,
    YStack,
} from '@my/ui';
import { Form } from 'tamagui';
import { useState } from "react";
import { useRouter } from "next/router";

interface FormData {
    alias: string;
    email: string;
    pwd: string;
}

interface Error {
    alias?: string;
    pwd?: string;
}

// type Props = {
//     formId: string;
//     petForm: FormData;
//     forNewPet?: boolean;
// };

function Signup() {

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Inscription</H2>
            <Form gap="$2">
                <Input
                    placeholder="Nom d'utilisateur"
                    type="text"
                    name="alias"
                    required
                />

                <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                />

                <Input
                    placeholder="Mot de passe"
                    type="password"
                    secureTextEntry
                    name="pwd"
                    required
                />

                <Button type="submit" className="btn">
                    S'inscrire
                </Button>
            </Form>
        </YStack>
    );
};

export default Signup;