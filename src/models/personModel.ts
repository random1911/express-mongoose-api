import { Schema, model } from "mongoose";

interface IContact {
  label?: string;
  value: string;
}

const contactSchema: Schema = new Schema({
  label: String,
  value: String
});

export interface IPerson {
  name: string;
  assistant?: string;
  groups?: string;
  ordering_id?: string;
  organization_info?: string;
  phones?: IContact[];
  emails?: IContact[];
  picture_url?: String;
}

const personSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  assistant: String,
  groups: String,
  ordering_id: Number,
  organization_info: {
    type: Schema.Types.ObjectId,
    ref: "organization"
  },
  phones: [contactSchema],
  emails: [contactSchema],
  picture_url: String
});

const virtualId = personSchema.virtual("id");
virtualId.get(function(this: { _id: string }) {
  return this._id;
});

personSchema.set("toJSON", { virtuals: true });

export default model("person", personSchema, "persons");
