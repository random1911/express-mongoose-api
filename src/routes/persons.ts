import * as express from "express";
import personModel from "../models/personModel";

const router = express.Router();
const PATH = "/persons";
const PATH_WITH_ID = `${PATH}/:id`;
const ORGANIZATION = "organization_info";

const findPersonById = async (id: string) =>
  await personModel.findById(id).populate(ORGANIZATION);

/** get all persons */
router.get(PATH, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 1000;
    const skip = parseInt(req.query.from, 10) || 0;
    const persons = await personModel.find({}, null, {
      skip,
      limit
    }).populate(ORGANIZATION);
    const count = await personModel.count({});
    res.status(200).json({ persons, count });
  } catch (e) {
    res.status(500).json(e);
  }
});

/** add person */
router.post(PATH, async (req, res) => {
  const personData = req.body;
  try {
    const person = new personModel({ ...personData });
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
router.put(PATH_WITH_ID, async (req, res) => {
  const { id } = req.params;
  try {
    const model = await personModel.updateOne({ _id: id }, { ...req.body });
    if (model.nModified < 1) {
      res.status(400).json({});
      return;
    }
    const updated = await findPersonById(id);
    res.status(200).json(updated);
  } catch (e) {
    res.status(400).json(e);
  }
});

/** delete single person */
router.delete(PATH_WITH_ID, async (req, res) => {
  try {
    const result = await personModel.findByIdAndDelete(req.params.id);
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
