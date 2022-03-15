import mongoose from'mongoose';

export interface IWilder {
  name:string;
  city:string;
  skills: string[];
}

const Schema = mongoose.Schema;
const WilderSchema = new Schema<IWilder>({
  name: {type: String, unique: true, required: true},
  city: String,
  skills: [{ title: String, votes: Number }],
});

export default mongoose.model("wilder", WilderSchema);

