import express from "express";

let router = express.Router();

import userController from "./UserController.js";
import teacherController from "./TeacherController.js"
import evaluationController from "./EvaluationController.js"
import courseController from "./CourseController.js"


router.get("/", function(req, res){
    console.log("oi");
    res.status(200).json({message: "Oi"});
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", evaluationController);
router.use("/", courseController);

export default router;