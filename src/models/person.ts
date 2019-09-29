import { Schema, model } from "mongoose";

const personSchema: Schema = new Schema(
  {
    id: String,
    name: {
      type: String,
      required: true
    },
    assistant: String,
    groups: String,
    orderingId: Number,
    // orgId: types.maybe(OrganizationInfo),
    // phone: types.optional(types.array(Contact), []),
    // email: types.optional(types.array(Contact), []),
    pictureUrl: String
  },
  { id: true }
);

export default model("person", personSchema);

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
