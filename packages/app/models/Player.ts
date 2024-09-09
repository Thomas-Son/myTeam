import mongoose from "mongoose";

export interface Players extends mongoose.Document {
    name: string;
    post: string;
    height: number;
    weight: number;
    number: number;
    age: number;
    nationality: string;
    state: string;
}

const PlayerSchema = new mongoose.Schema<Players>({
    name: {
        type: String,
        required: [true, "Entrer le nom du joueur."],
    },
    post: {
        type: String,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    number: {
        type: Number,
    },
    age: {
        type: Number,
    },
    nationality: {
        type: String,
    },
    state: {
        type: String,
    },
});

export default mongoose.models.Player || mongoose.model<Players>("Player", PlayerSchema);