import { Schema, model } from "mongoose";
// import { organizationSchema } from "./organization";

const personSchema: Schema = new Schema({
  // id: new mongoose.Types.ObjectId(), // TODO
  name: {
    type: String,
    required: true
  },
  assistant: String,
  groups: String,
  ordering_id: Number,
  organization_id: Schema.Types.ObjectId,
  organization: {
    type: Schema.Types.ObjectId,
    ref: "organization"
  },
  // orgId: types.maybe(OrganizationInfo),
  // phone: types.optional(types.array(Contact), []),
  // email: types.optional(types.array(Contact), []),
  picture_url: String
});

const virtualId = personSchema.virtual("id");
virtualId.get(function(this: { _id: string }) {
  return this._id;
});

// const organization = personSchema.virtual("organization");
// organization.get(async function(this: { organization_id?: string }) {
//   if (!this.organization_id) return undefined;
//   return OrganizationModel.findById(this.organization_id);
// });
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
