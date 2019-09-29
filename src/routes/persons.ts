import * as express from "express";
import PersonModel from "../models/person";

const router = express.Router();

router.get("/persons", async (req, res) => {
  try {
    const limitParam = parseInt(req.params.limit, 10);
    const limit = limitParam || 1000;
    const persons = await PersonModel.find().limit(limit);
    res.status(200).json(persons);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/persons", async (req, res) => {
  const personData = req.body;
  console.log({ ...personData });
  const person = new PersonModel({ ...personData });
  console.log(person);
  try {
    const saved = await person.save();
    res.status(200).json(saved);
  } catch (e) {
    res.status(400).json(e);
  }
});

export default router;
