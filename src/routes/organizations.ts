import * as express from "express";
import organizationModel from "../models/organizationModel";

const router = express.Router();
const PATH = "/organizations";

router.get(PATH, async (req, res) => {
  try {
    const organizations = await organizationModel.find();
    res.status(200).json(organizations);
  } catch (e) {
    res.status(500).json(e);
  }
});

// TODO: how to get TS type from schema?
const saveSingle = async (orgData: any, res: express.Response) => {
  try {
    const organization = new organizationModel(orgData);
    const saved = await organization.save();
    res.status(200).json(saved);
  } catch (e) {
    res.status(400).json(e);
  }
};

const saveMultiple = async (orgData: any[], res: express.Response) => {
  try {
    const saved = await organizationModel.insertMany(orgData);
    res.status(200).json(saved);
  } catch (e) {
    res.status(400).json(e);
  }
};

router.post(PATH, (req, res) => {
  const orgData = req.body;
  if (Array.isArray(orgData)) {
    saveMultiple(orgData, res);
  } else {
    saveSingle(orgData, res);
  }
});

export default router;
