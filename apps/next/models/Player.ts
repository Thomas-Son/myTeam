import mongoose from "mongoose";

export interface Players extends mongoose.Document {
    name: string;
}

const PlayerSchema = new mongoose.Schema<Players>({
    name: {

        type: String,
        required: [true, "Entrer le nom du joueur."],
    }
});

export default mongoose.models.Player || mongoose.model<Players>("Player", PlayerSchema);