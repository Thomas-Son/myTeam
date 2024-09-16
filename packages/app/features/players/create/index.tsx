import {
    Button,
    Label,
    Form,
    Input,
    H2,
    YStack,
} from '@my/ui';
import { useState } from "react";
import { useRouter } from "next/router";

// interface FormData {
//     name: string;
//     post: string;
//     height: number;
//     weight: number;
//     number: number;
//     age: number;
//     nationality: string;
//     state: string;
// }

// interface Error {
//     name?: string;
// }

// type Props = {
//     formId: string;
//     playerForm: FormData;
// };

function AddPlayer() {

    // const router = useRouter();
    // const contentType = "application/json";
    // const [errors, setErrors] = useState({});
    // const [message, setMessage] = useState("");
    // const [alias, setAlias] = useState("");

    // const [form, setForm] = useState({
    //     name: playerForm.name,
    //     post: playerForm.post,
    //     height: playerForm.height,
    //     weight: playerForm.weight,
    //     number: playerForm.number,
    //     age: playerForm.age,
    //     nationality: playerForm.nationality,
    //     state: playerForm.state
    // });


    // const postData = async (form: FormData) => {
    //     try {
    //         const res = await fetch("/api/players", {
    //             method: "POST",
    //             headers: {
    //                 Accept: contentType,
    //                 "Content-Type": contentType,
    //             },
    //             body: JSON.stringify(form),
    //         });

    //         console.log(res)

    //         if (!res.ok) {
    //             throw new Error(res.status.toString());
    //         }

    //         router.push("/team-demo");
    //     } catch (error) {
    //         setMessage("Failed to add player");
    //     }
    // };

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

    // const formValidate = () => {
    //     let err: Error = {};
    //     if (!form.name) err.name = "Entrer le nom du joueur";
    //     return err;
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const errs = formValidate();

    //     if (Object.keys(errs).length === 0) {
    //         postData(form)
    //     } else {
    //         setErrors({ errs });
    //     }
    // };

    return (
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
            <H2>Ajouter un joueur à l'équipe</H2>

            <Form gap="$3" >
                <Label>Nom</Label>
                <Input
                    placeholder="Nom du joueur"
                    type="text"
                    name="name"
                    required
                />
{/* 
                <Label htmlFor="post">Poste</Label>
                <Input
                    placeholder="Post du joueur"
                    type="text"
                    name="post"
                />

                <Label htmlFor="height">Taille</Label>
                <Input
                    placeholder="Taille du joueur"
                    type="number"
                    name="height"
                />

                <Label htmlFor="weight">Poids</Label>
                <Input
                    placeholder="Poids du joueur"
                    type="number"
                    name="weight"
                />

                <Label htmlFor="number">Numéro</Label>
                <Input
                    placeholder="Numéro du joueur"
                    type="number"
                    name="number"
                />

                <Label htmlFor="age">Age</Label>
                <Input
                    placeholder="Age du joueur"
                    type="number"
                    name="age"
                />

                <Label htmlFor="nationality">Nationalité</Label>
                <Input
                    placeholder="Nationalité du joueur"
                    type="text"
                    name="nationality"
                />

                <Label htmlFor="state">Etat</Label>
                <Input
                    placeholder="Etat du joueur"
                    type="text"
                    name="state"
                /> */}

                <Button type="submit" className="btn">
                    Ajouter
                </Button>
            </Form>

        </YStack>
    );
};

export default AddPlayer;