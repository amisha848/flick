import express from "express"


import {addLectures,
    createCourse,
    deleteLecture,
    deleteCourse,
} from "../controllers/admin.js";
import { uploadFiles } from "../middlewares/multer.js";
import { isAdmin, isAuth } from "../middlewares/isAuth.js";




const router= express.Router();

router.post("/course/new",createCourse,uploadFiles,isAdmin,isAuth);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
export default router;