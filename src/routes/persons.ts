import * as express from "express";
import PersonModel from "../models/person";

const router = express.Router();
const PATH = "/persons";
const PATH_WITH_ID = `${PATH}/:id`;
const ORGANIZATION = "organization_info";

const findPersonById = async (id: string) =>
  await PersonModel.findById(id).populate(ORGANIZATION);

/** get all persons */
router.get(PATH, async (req, res) => {
  try {
    const limitParam = parseInt(req.params.limit, 10);
    const limit = limitParam || 1000;
    const persons = await PersonModel.find()
      .limit(limit)
      .populate(ORGANIZATION);
    const count = await PersonModel.count({});
    res.status(200).json({ persons, count });
  } catch (e) {
    res.status(500).json(e);
  }
});

/** add person */
router.post(PATH, async (req, res) => {
  const personData = req.body;
  try {
    const person = new PersonModel({ ...personData });
    const saved = await person.save();
    const createdPerson = await findPersonById(saved._id);
    res.status(200).json(createdPerson);
  } catch (e) {
    res.status(400).json(e);
  }
});

/** get single person */
router.get(PATH_WITH_ID, async (req, res) => {
  try {
    const person = await findPersonById(req.params.id);
    res.status(200).json(person);
  } catch (e) {
    res.status(404).json(e);
  }
});

/** edit person */
router.put(PATH_WITH_ID, (req, res) => {
  res.status(501).json({ error: "NOT IMPLEMENTED" });
});

/** delete single person */
router.delete(PATH_WITH_ID, async (req, res) => {
  try {
    const result = await PersonModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json(e);
  }
});

/** find person by name */
router.get(`${PATH}/find`, (req, res) => {
  res.status(501).json({ error: "NOT IMPLEMENTED" });
});

export default router;
