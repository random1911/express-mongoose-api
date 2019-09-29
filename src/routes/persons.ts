import * as express from "express";
import PersonModel from "../models/person";

const router = express.Router();

router.get("/persons", (req, res) => {
  res.status(200).send("hello");
});

router.post("/persons", (req, res) => {
  const personData = req.body;
  console.log({ ...personData });
  const person = new PersonModel({ ...personData });
  console.log(person);
  person
    .save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(e => res.status(400).json(e));
});

export default router;
