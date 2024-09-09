import {
    Anchor,
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

function Signin() {
    // const router = useRouter();
    // const contentType = "application/json";
    // const [errors, setErrors] = useState({});
    // const [message, setMessage] = useState("");

    // const [form, setForm] = useState({
    //     alias: FormData.alias,
    //     pwd: FormData.pwd,
    // });

    // /* The PUT method edits an existing entry in the mongodb database. */
    // const putData = async (form: FormData) => {
    //     const { id } = router.query;

    //     try {
    //         const res = await fetch(`/api/pets/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 Accept: contentType,
    //                 "Content-Type": contentType,
    //             },
    //             body: JSON.stringify(form),
    //         });

    //         // Throw error with status code in case Fetch API req failed
    //         if (!res.ok) {
    //             throw new Error(res.status.toString());
    //         }

    //         const { data } = await res.json();

    //         mutate(`/api/pets/${id}`, data, false); // Update the local data without a revalidation
    //         router.push("/");
    //     } catch (error) {
    //         setMessage("Failed to update pet");
    //     }
    // };

    // /* The POST method adds a new entry in the mongodb database. */
    // const postData = async (form: FormData) => {
    //     try {
    //         const res = await fetch("/api/pets", {
    //             method: "POST",
    //             headers: {
    //                 Accept: contentType,
    //                 "Content-Type": contentType,
    //             },
    //             body: JSON.stringify(form),
    //         });

    //         // Throw error with status code in case Fetch API req failed
    //         if (!res.ok) {
    //             throw new Error(res.status.toString());
    //         }

    //         router.push("/");
    //     } catch (error) {
    //         setMessage("Failed to add pet");
    //     }
    // };

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //     const target = e.target;
    //     const value =
    //         target.name === "poddy_trained"
    //             ? (target as HTMLInputElement).checked
    //             : target.value;
    //     const name = target.name;

    //     setForm({
    //         ...form,
    //         [name]: value,
    //     });
    // };

    // /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
    // const formValidate = () => {
    //     let err: Error = {};
    //     if (!form.name) err.name = "Name is required";
    //     if (!form.owner_name) err.owner_name = "Owner is required";
    //     if (!form.species) err.species = "Species is required";
    //     if (!form.image_url) err.image_url = "Image URL is required";
    //     return err;
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const errs = formValidate();

    //     if (Object.keys(errs).length === 0) {
    //         forNewPet ? postData(form) : putData(form);
    //     } else {
    //         setErrors({ errs });
    //     }
    // };

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Connexion</H2>
            <Form gap="$2">
                <Input
                    placeholder="Nom d'utilisateur"
                    type="text"
                    name="alias"
                />

                <Input
                    placeholder="Mot de passe"
                    type="password"
                    secureTextEntry
                    name="pwd"
                />

                <Button type="submit" className="btn">
                    Se Connecter
                </Button>
            </Form>
        </YStack>
    );
};

export default Signin;
