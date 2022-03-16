import mongoose from'mongoose';
interface ISkill{
title: string;
votes: number;
}

export interface IWilder {
  name:string;
  city:string;
  skills: ISkill[];
  img?: string;
}

const Schema = mongoose.Schema;
const WilderSchema = new Schema<IWilder>({
  name: {type: String, unique: true, required: true},
  city: String,
  skills: [{ title: String, votes: Number }],
  img: String,
});

export default mongoose.model("wilder", WilderSchema);

