import express from 'express';
let router = express.Router();

import CourseService from "./services/CourseService";

router.post("/addCourse", async function(req,res) {
    const courseModel = {
            name: req.body.name
    }
    const course = await CourseService.saveCourse(courseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourses", async function(req,res){
    const allCourses = await CourseService.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/course/:id", async function(req,res){
    const allCourses = await CourseService.getUSerById(req.params.id);
    return res.status(200).json(course);
});

router.delete("/deleteCourse/:id", async function(req,res){
    const allCourses = await CourseService.deleUSerById(req.params.id);
    return res.status(200).json(course);
});


router.put("/updateCourseById", async function(req,res) {
    const courseModel = {
        name: req.body.name
    }
    const course = await CourseService.updateUSerById(req.params.id,courseModel);
    return res.status(200).json(course);
});

export default router;