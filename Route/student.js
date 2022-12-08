import express from 'express';
import { getStudentById, studentAdd,studentDelete,studentList, studentUpdate } from '../Controller/student';
const router = express.Router();

//Student---------------------------------

router.post("/addstudent",studentAdd);
router.get("/studentlist",studentList);
router.delete("/deletestudent/:id", studentDelete);
router.put("/editstudent/:id", studentUpdate);
router.get("/studentdetail/:id",getStudentById);
export default router;