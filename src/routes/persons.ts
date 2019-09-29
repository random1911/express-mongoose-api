import * as express from "express";
import PersonModel from "../models/person";

const router = express.Router();
const PATH = "/persons";

router.get(PATH, async (req, res) => {
  try {
    const limitParam = parseInt(req.params.limit, 10);
    const limit = limitParam || 1000;
    const persons = await PersonModel.find().limit(limit);
    const count = await PersonModel.count({});
    res.status(200).json({ persons, count });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post(PATH, async (req, res) => {
  const personData = req.body;
  console.log({ ...personData });
  try {
    const person = new PersonModel({ ...personData });
    console.log(person);
    const saved = await person.save();
    res.status(200).json(saved);
  } catch (e) {
    res.status(400).json(e);
  }
});

export default router;
