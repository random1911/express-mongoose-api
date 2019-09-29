import { Schema, model } from "mongoose";
import { organizationSchema } from "./organization";

const personSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  assistant: String,
  groups: String,
  orderingId: Number,
  organization: organizationSchema,
  // orgId: types.maybe(OrganizationInfo),
  // phone: types.optional(types.array(Contact), []),
  // email: types.optional(types.array(Contact), []),
  pictureUrl: String
});

const virtualId = personSchema.virtual("id");
virtualId.get(function(this: { _id: string }) {
  return this._id;
});
personSchema.set("toJSON", { virtuals: true });

export default model("person", personSchema, "persons");

/*
    id: types.identifierNumber,
    name: types.string,
    assistant: types.maybe(types.string),
    groups: types.maybe(types.string),
    orderingId: types.maybe(types.number),
    orgId: types.maybe(OrganizationInfo),
    phone: types.optional(types.array(Contact), []),
    email: types.optional(types.array(Contact), []),
    pictureId: types.maybe(Picture),
* */
