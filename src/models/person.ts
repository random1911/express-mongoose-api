import { Schema, model } from "mongoose";

const contactSchema: Schema = new Schema({
  label: String,
  value: String
});

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
