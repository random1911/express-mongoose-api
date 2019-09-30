import { Schema, model } from "mongoose";
// import { organizationSchema } from "./organization";

const contactSchema: Schema = new Schema({
  label: String,
  value: String,
  primary: Boolean
});

const personSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  assistant: String,
  groups: String,
  ordering_id: Number,
  organization: {
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

/*
const Contact = types.model("ContactModel", {
  label: types.maybe(types.string),
  value: types.maybe(types.string),
  primary: false
});
 */
