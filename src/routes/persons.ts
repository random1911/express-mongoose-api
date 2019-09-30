import * as express from "express";
import PersonModel from "../models/person";

const router = express.Router();
const PATH = "/persons";
const PATH_WITH_ID = `${PATH}/:id`;

/** get all persons */
router.get(PATH, async (req, res) => {
  try {
    const limitParam = parseInt(req.params.limit, 10);
    const limit = limitParam || 1000;
    const persons = await PersonModel.find()
      .limit(limit)
      .populate("organization");
    const count = await PersonModel.count({});
    res.status(200).json({ persons, count });
  } catch (e) {
    res.status(500).json(e);
  }
});

/** add person */
router.post(PATH, async (req, res) => {
  const personData = req.body;
  console.log({ ...personData });
  try {
    const person = new PersonModel({ ...personData });
    console.log(person);
    const saved = await person.save(function(error) {
      if (!error) {
        PersonModel.find({})
          .populate("organization")
          .exec(function(error, posts) {
            console.log(JSON.stringify(posts, null, "t"));
          });
      }
    });
    res.status(200).json(saved);
  } catch (e) {
    res.status(400).json(e);
  }
});

/** get single person */
router.get(PATH_WITH_ID, async (req, res) => {
  try {
    const person = await PersonModel.findById(req.params.id).populate(
      "organization"
    );
    res.status(200).json(person);
  } catch (e) {
    res.status(404).json(e);
  }
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

export default router;
