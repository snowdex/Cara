import express from "express";

import { saveResume, getDefResume, getAllResumes } from "../controller/resume.controller.js"


const router =
  express.Router();

router.post(
  "/",
  saveResume
);
router.get(
  "/def",
  getDefResume
);

router.get(
  "/",
  getAllResumes
);

export default router;