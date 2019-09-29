import { Schema, model } from "mongoose";

export const organizationSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: String
});

const virtualId = organizationSchema.virtual("id");
virtualId.get(function(this: { _id: string }) {
  return this._id;
});
organizationSchema.set("toJSON", { virtuals: true });

export default model("organization", organizationSchema, "organizations");
